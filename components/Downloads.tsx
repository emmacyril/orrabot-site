import { Orra } from "./Orra";
import { EMI } from "@/lib/content";
import type { Downloads as D } from "@/lib/release";

export function Downloads({ downloads }: { downloads: D }) {
  const cards = [
    { os: "macOS", color: EMI.violet, facts: ["Apple silicon and Intel", "Drag to Applications and open", "First launch: right-click → Open"],
      links: [["Apple silicon .dmg", downloads.macArm, true], ["Intel .dmg", downloads.macIntel, false]] },
    { os: "Windows", color: EMI.blue, facts: ["64-bit, Windows 10 and 11", "Per-user install, no admin rights", "SmartScreen: More info → Run anyway"],
      links: [["Download .exe", downloads.windows, true]] },
    { os: "Linux", color: EMI.orange, facts: ["Ubuntu 24.04, x86-64 (beta)", "Install the .deb with apt", "The AppImage runs on most other distros"],
      links: [["Download .deb", downloads.deb, true], [".AppImage", downloads.appImage, false]] },
  ] as const;
  return (
    <section className="sec wrap" id="download">
      <h2 className="sec-title">Download</h2>
      <p className="sec-sub">Everything OrraBot needs is inside the app. Install it, sign in to one AI engine, and create your first bot.</p>
      <div className="dls">
        {cards.map((c) => (
          <div className="dlc" key={c.os}>
            <div className="os"><Orra color={c.color} /><h3>{c.os}</h3></div>
            <ul>{c.facts.map((f) => <li key={f}>{f}</li>)}</ul>
            <div className="btns">
              {c.links.map(([label, href, primary]) => (
                <a key={label} className={`btn ${primary ? "btn-primary" : "btn-quiet"}`} href={href}>{label}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="dl-foot">Always the latest build{downloads.version ? ` (v${downloads.version})` : ""} · <a href="/download">all downloads, including Android</a> · <a href="/docs/getting-started">getting started</a></p>
    </section>
  );
}
