import { NextResponse } from "next/server";

// Read FEEDBACK_TO at request time only; it must never reach the client bundle or the build output.
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const SITE = "https://orrabot-site.vercel.app";
const TYPES = ["feedback", "bug", "question"] as const;
type Kind = (typeof TYPES)[number];

const LIMITS = { name: 100, email: 200, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const bad = (error: string, status = 400) => NextResponse.json({ ok: false, error }, { status });

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    const ct = req.headers.get("content-type") ?? "";
    if (ct.includes("application/json")) body = (await req.json()) as Record<string, unknown>;
    else body = Object.fromEntries((await req.formData()).entries());
  } catch {
    return bad("Could not read the form.");
  }
  const str = (k: string) => (typeof body[k] === "string" ? (body[k] as string).trim() : "");

  // Honeypot: real people never fill the hidden "website" field. Pretend success to bots.
  if (str("website")) return NextResponse.json({ ok: true });

  const name = str("name");
  const email = str("email");
  const message = str("message");
  const type: Kind = (TYPES as readonly string[]).includes(str("type")) ? (str("type") as Kind) : "feedback";

  if (!name || name.length > LIMITS.name) return bad("Please enter your name (up to 100 characters).");
  if (!EMAIL_RE.test(email) || email.length > LIMITS.email) return bad("Please enter a valid email address.");
  if (message.length < 5 || message.length > LIMITS.message) return bad("Please write a message between 5 and 5000 characters.");

  const payload = {
    name,
    email,
    _replyto: email,
    type,
    _subject: `OrraBot feedback: ${type}`,
    message,
    _template: "table",
    _captcha: "false",
  };

  // FormSubmit sits behind a Cloudflare challenge that blocks server-to-server calls from
  // Vercel. Once the form is activated, FormSubmit issues a random alias that hides the
  // inbox address; with FEEDBACK_FORMSUBMIT_ID set, the browser posts the validated
  // message straight to that alias. The inbox address itself never leaves the server.
  const alias = process.env.FEEDBACK_FORMSUBMIT_ID?.trim();
  if (alias && /^[A-Za-z0-9]{8,64}$/.test(alias)) {
    return NextResponse.json({ ok: true, relay: `https://formsubmit.co/ajax/${alias}`, payload });
  }

  const to = process.env.FEEDBACK_TO?.trim();
  if (!to) return bad("Feedback is not configured on this server yet.", 503);

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Referer: `${SITE}/contact`,
        Origin: SITE,
        "User-Agent": "Mozilla/5.0 (compatible; OrraBotSite/1.0; +https://orrabot-site.vercel.app)",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    const raw = await res.text();
    let data: { success?: string | boolean; message?: string } = {};
    try { data = JSON.parse(raw); } catch { /* not JSON (e.g. a block page) */ }
    const okFlag = data.success === true || data.success === "true";
    if (res.ok && okFlag) return NextResponse.json({ ok: true });
    // First-ever submission: FormSubmit asks the owner to activate the form by email.
    const msg = String(data.message ?? "");
    if (/activat/i.test(msg)) return NextResponse.json({ ok: true, pending: true, note: "Received. Delivery starts once the inbox owner activates the form." });
    if (res.status === 403 && /cloudflare/i.test(res.headers.get("server") ?? "")) {
      console.error("feedback relay blocked by Cloudflare; set FEEDBACK_FORMSUBMIT_ID to the FormSubmit alias");
      return bad("Feedback is temporarily unavailable. Please try again later.", 503);
    }
    console.error("feedback relay failed", res.status, res.headers.get("server"), res.headers.get("cf-mitigated"), raw.slice(0, 300).replace(/[^\s@]+@[^\s@]+/g, "<addr>"));
    return bad("Sorry, your message could not be sent. Please try again later.", 502);
  } catch (e) {
    console.error("feedback relay error", e);
    return bad("Sorry, your message could not be sent. Please try again later.", 502);
  }
}

export function GET() {
  return NextResponse.json({ ok: false, error: "Use POST." }, { status: 405 });
}
