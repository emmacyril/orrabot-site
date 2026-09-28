"use client";
import { useState } from "react";
import { TIERS, CONTACT } from "@/lib/content";

export function Pricing() {
  const [yearly, setYearly] = useState(false);
  return (
    <section className="sec wrap center" id="pricing">
      <h2 className="sec-title">Pricing</h2>
      <p className="sec-sub">Your bots run on your own AI plans, so OrraBot charges per company, never per token.</p>
      <div className="period" role="group" aria-label="Billing period">
        <button type="button" aria-pressed={!yearly} onClick={() => setYearly(false)}>Monthly</button>
        <button type="button" aria-pressed={yearly} onClick={() => setYearly(true)}>Yearly <span>2 months free</span></button>
      </div>
      <div className="tiers">
        {TIERS.map((t) => {
          const once = "once" in t;
          const amount = once ? t.once : yearly ? t.yearly : t.monthly;
          const unit = once ? " once" : amount === 0 ? "" : yearly ? " / year" : " / month";
          return (
            <div className={`tier${t.primary ? " pick" : ""}`} key={t.name}>
              <div className="nm">{t.name}{"badge" in t && <span className="badge b-v">{t.badge}</span>}</div>
              <div className="price">${amount}<small>{unit}</small></div>
              <p className="note">{t.note || (yearly ? "Billed yearly" : "Billed monthly")}</p>
              <a className={`btn ${t.primary ? "btn-primary" : "btn-quiet"}`} href={t.href}>{t.cta}</a>
              <ul>{t.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          );
        })}
      </div>
      <div className="enterprise">
        <span><b>Hosted add-ons, any plan:</b> always-on bot computers from $29 a month each, managed AI credits, and phone access.</span>
        <a className="btn btn-quiet" href={`mailto:${CONTACT}?subject=OrraBot%20hosted`}>Contact sales</a>
      </div>
    </section>
  );
}
