import { Orra } from "./Orra";
import { FAQS, REPO, RELEASES, CONTACT } from "@/lib/content";

export function Faq() {
  return (
    <section className="sec wrap center" id="faq" style={{ paddingTop: 0 }}>
      <h2 className="sec-title">FAQs</h2>
      <div className="faq">
        {FAQS.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="sec final band">
      <div className="wrap">
        <Orra className="orra-big" color="#FF6B3D" />
        <h2>Meet your first bot</h2>
        <p>Free, open source, and running in about two minutes.</p>
        <div className="ctas">
          <a className="btn btn-primary" href="#download">Download OrraBot</a>
          <a className="btn btn-quiet" href={`mailto:${CONTACT}?subject=OrraBot%20demo`}>Book a demo</a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <a className="logo" href="#top"><Orra color="#FF6B3D" />OrraBot</a>
            <p className="blurb">A team of AI bots in a chat app, with a separate team for every company you run. Made by OrraBot.</p>
          </div>
          <div><h4>Product</h4><a href="#download">Download</a><a href="#demo">Demo</a><a href="#features">Features</a><a href="#pricing">Pricing</a></div>
          <div><h4>Project</h4><a href={REPO}>GitHub</a><a href={RELEASES}>Releases</a><a href={`${REPO}/blob/main/LICENSE`}>Licence</a></div>
          <div><h4>Contact</h4><span>{CONTACT}</span><a href="#faq">FAQs</a></div>
        </div>
        <div className="legal"><span>© {new Date().getFullYear()} OrraBot</span><span>Apache License 2.0</span></div>
      </div>
    </footer>
  );
}
