import { SALES_EMAIL, TIERS } from "@/lib/content";

export function Pricing() {
  return (
    <section className="sec wrap center" id="pricing">
      <h2 className="sec-title">Pricing</h2>
      <p className="sec-sub">Per person, per month, in US dollars. Pay by card or with Espees (1 Espee = $1.60). Your bots use your own AI plans, so AI usage is never billed here.</p>
      <div className="tiers">
        {TIERS.map((t) => (
          <div className={`tier${t.primary ? " pick" : ""}`} key={t.name}>
            <div className="nm">{t.name}</div>
            <div className="price">${t.monthly}<small>{t.monthly === 0 ? "" : " / person / month"}</small></div>
            <p className="note">{t.note}</p>
            <a className={`btn ${t.primary ? "btn-primary" : "btn-quiet"}`} href={t.href}>{t.cta}</a>
            <ul>{t.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
      <div className="enterprise">
        <span><b>Enterprise, from $20,000 a year:</b> for larger organisations, arranged with us directly.</span>
        <a className="btn btn-quiet" href={`mailto:${SALES_EMAIL}`}>Contact sales</a>
      </div>
    </section>
  );
}
