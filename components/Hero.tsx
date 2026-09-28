import { Orra } from "./Orra";
import { AppDemo } from "./AppDemo";
import { EMI } from "@/lib/content";
import type { Downloads } from "@/lib/release";

const APPLE = "M16.4 12.6c0-2.5 2-3.6 2.1-3.7-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.2 1-4.1 2.5-1.8 3-.5 7.5 1.2 10 .8 1.2 1.8 2.6 3.1 2.5 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.3-.9-2.3-4.1zM14 5.2c.7-.8 1.1-1.9 1-3-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.6 2.9-1.4z";

export function Hero({ downloads }: { downloads: Downloads }) {
  return (
    <section className="hero wrap" id="demo">
      <div className="crew" aria-hidden="true">
        {Object.values(EMI).map((c) => <Orra key={c} color={c} />)}
      </div>
      <a className="pill" href="#organisations"><b>New</b>Organisations: a separate team for every company →</a>
      <h1>Your AI team, <span>one chat away.</span></h1>
      <p className="sub">Every contact in OrraBot is a bot that does real work. Brief it like a teammate, watch it use its own computer and your apps, and approve what matters. Run a separate team for every company you look after.</p>
      <div className="ctas">
        <a className="btn btn-primary" href={downloads.macArm}>
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={APPLE} /></svg>Download for macOS
        </a>
        <a className="btn btn-quiet" href="#download">Windows &amp; Linux</a>
      </div>
      <p className="fine">Free · Apache 2.0 · runs on the Claude, Codex or Grok plan you already have{downloads.version ? ` · v${downloads.version}` : ""}</p>
      <AppDemo />
    </section>
  );
}
