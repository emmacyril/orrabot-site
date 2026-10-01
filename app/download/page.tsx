import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Closing";
import { Orra } from "@/components/Orra";
import { EMI, RELEASES } from "@/lib/content";
import { getDownloads } from "@/lib/release";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "Download OrraBot",
  description: "Download OrraBot for macOS, Windows, Linux and Android.",
};

type Card = { os: string; color: string; facts: string[]; links: [label: string, href: string, primary: boolean][] };

export default async function DownloadPage() {
  const d = await getDownloads();
  const cards: Card[] = [
    { os: "macOS", color: EMI.violet, facts: ["Apple silicon (M1 and later) or Intel", "Open the .dmg and drag OrraBot to Applications"],
      links: [["Download for Apple silicon", d.macArm, true], ["Download for Intel Mac", d.macIntel, false]] },
    { os: "Windows", color: EMI.blue, facts: ["64-bit Windows 10 and 11", "Per-user install, no admin rights needed", "If SmartScreen appears: More info → Run anyway"],
      links: [["Download for Windows", d.windows, true]] },
    { os: "Linux", color: EMI.orange, facts: ["Ubuntu / Debian: install the .deb", "Other distributions: the AppImage", "x86-64 (beta)"],
      links: [["Download .deb", d.deb, true], ["Download .AppImage", d.appImage, false]] },
    { os: "Android", color: EMI.green, facts: ["Companion app for your phone", "Pair it with the desktop app by QR code", "Install the .apk (allow installs from your browser)"],
      links: [["Download for Android", d.android, true]] },
  ];
  return (
    <>
      <Nav />
      <main className="sec wrap">
        <div className="dl-hero">
          <span className="kicker">Download</span>
          <h1 className="page-title">Get OrraBot</h1>
          <p className="sec-sub">Install the desktop app, sign in to Praxiom (or turn on another AI provider), and create your first bot.{d.version ? ` Latest version: v${d.version}.` : ""}</p>
        </div>
        <div className="dl-big">
          {cards.map((c) => (
            <div className="dlc" key={c.os}>
              <div className="os"><Orra color={c.color} /><h2 style={{ fontSize: 22, fontWeight: 700 }}>{c.os}</h2></div>
              <ul>{c.facts.map((f) => <li key={f}>{f}</li>)}</ul>
              <div className="btns">
                {c.links.map(([label, href, primary]) => (
                  <a key={label} className={`btn ${primary ? "btn-primary" : "btn-quiet"}`} href={href}>{label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="dl-note">
          OrraBot updates itself once installed · <a href={d.page ?? RELEASES}>all files for this release</a> · <a href="/docs/getting-started">getting started</a> · <a href="/docs/phone-and-remote-access">pair your phone</a>
        </p>
      </main>
      <Footer />
    </>
  );
}
