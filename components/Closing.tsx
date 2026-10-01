import { Orra } from "./Orra";
import { FAQS, contactHref } from "@/lib/content";

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
        <p>Free to start, and running in about two minutes.</p>
        <div className="ctas">
          <a className="btn btn-primary" href="/download">Download OrraBot</a>
          <a className="btn btn-quiet" href={contactHref("question")}>Book a demo</a>
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
            <a className="logo" href="/"><Orra color="#FF6B3D" />OrraBot</a>
            <p className="blurb">A team of AI bots in a chat app, with a separate team for every company you run. Made by OrraBot.</p>
          </div>
          <div><h4>Product</h4><a href="/download">Download</a><a href="/#demo">Demo</a><a href="/#features">Features</a><a href="/#pricing">Pricing</a></div>
          <div><h4>Help</h4><a href="/docs">Help centre</a><a href="/docs/getting-started">Getting started</a><a href="/docs/troubleshooting">Troubleshooting</a><a href="/docs/updates">Updates</a></div>
          <div><h4>Contact</h4><a href="/contact">Contact us</a><a href={contactHref("feedback")}>Send feedback</a><a href={contactHref("bug")}>Report a bug</a><a href="/#faq">FAQs</a></div>
        </div>
        <div className="legal"><span>© {new Date().getFullYear()} OrraBot</span><span>Made for every team</span></div>
      </div>
    </footer>
  );
}
