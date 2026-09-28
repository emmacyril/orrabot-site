import { Orra } from "./Orra";
import { EMI } from "@/lib/content";

export function ManyBots() {
  return (
    <section className="sec wrap center">
      <h2 className="sec-title">Work with many bots at once</h2>
      <p className="sec-sub">Start with one bot. Add another when the work grows: one on outreach, one on the books, one on the code. They work in parallel and pass work between them.</p>
      <div className="duo">
        <div className="fc">
          <h3>A computer of its own</h3>
          <p>Each bot can get a cloud desktop, a private VM or a desktop on your own server, and uses websites and apps the way you would.</p>
          <div className="viz">
            <div className="row"><b style={{ fontSize: 13.5 }}>Computer</b><span className="badge b-work" style={{ marginLeft: "auto" }}>● Working</span></div>
            <div style={{ fontSize: 13, color: "var(--muted)" }}>Signing in to Shopify to update this week&apos;s prices.</div>
            <div className="screen"><div className="pane"><i /><i /><i /><i /></div><span className="cursor" /></div>
          </div>
        </div>
        <div className="fc" id="organisations">
          <h3>A separate team for every company</h3>
          <p>Each organisation has its own bots, memory, logins, keys, budget and brand. Only the one you&apos;re in is running; the rest are locked.</p>
          <div className="viz orgs-viz">
            <div className="o"><span className="mark" style={{ background: "#6A4DFF" }}>K</span><b>Kite Studio</b><span className="badge b-ok">Open</span></div>
            <div className="o off"><span className="mark" style={{ background: "#E0673A" }}>N</span><b>Northwind Bakery</b><span className="badge b-v">Locked</span></div>
            <div className="o off"><span className="mark" style={{ background: "#1F7A5C" }}>H</span><b>Halden &amp; Co.</b><span className="badge b-v">Locked</span></div>
          </div>
        </div>
        <div className="fc">
          <h3>Bots remember how you work</h3>
          <p>Each bot keeps its own thread and memory, so the second time you ask, it already knows the context.</p>
          <div className="viz">
            <div className="bub">Lumen replied about the retainer. It&apos;s the same thread as July, so I answered with the rates we agreed.</div>
            <div className="bub">Noted for next time: Maria signs off on anything over $2k.</div>
            <div className="mem">Memory updated for <span className="badge b-v">Account Manager</span></div>
          </div>
        </div>
        <div className="fc">
          <h3>Put bots in one channel</h3>
          <p>Add a few bots to a channel and they hand work to each other. A Chief of Staff keeps the plan and chases what&apos;s late.</p>
          <div className="viz handoff">
            <div className="who"><Orra color={EMI.violet} />Chief of Staff</div>
            <div className="bub">Research, pull three competitor launches. Content, turn them into Friday&apos;s newsletter.</div>
            <div className="who"><Orra color={EMI.green} />Research</div>
            <div className="bub">Done. Notes are in the channel folder, over to Content.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
