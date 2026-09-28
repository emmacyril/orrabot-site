"use client";
import { useState } from "react";
import { Orra } from "./Orra";
import { ROLES } from "@/lib/content";

export function BotJobs() {
  const [ix, setIx] = useState(0);
  const role = ROLES[ix];
  return (
    <section className="sec band">
      <div className="wrap job">
        <div>
          <h2 className="sec-title">Give each bot a job</h2>
          <div className="roles">
            {ROLES.map((r, i) => (
              <button key={r.name} type="button" className="role" aria-pressed={i === ix} onClick={() => setIx(i)}>
                <Orra color={r.color} />{r.name}
              </button>
            ))}
          </div>
          <p className="role-desc"><b>{role.lead}</b> {role.desc}</p>
          <a className="btn btn-quiet" href="#jobs">See more jobs</a>
        </div>
        <div className="phone" aria-label="Phone preview">
          <div className="scr">
            <div className="notch" />
            <div className="ph-top"><Orra color={role.color} /><span>{role.name}</span></div>
            <div className="ph-feed" key={role.name}>
              {role.feed.map((f, i) => f.kind === "draft" ? (
                <div className="draft" key={i}>
                  <div className="subj">{f.subject}</div>
                  {f.body.split("\n").map((l, j) => <span key={j}>{l}<br /></span>)}
                  <div className="acts"><span>Send email</span><span>Discard</span></div>
                </div>
              ) : (
                <div key={i} className={`m ${f.kind === "you" ? "you" : "bot-m"}`} style={{ maxWidth: "88%", fontSize: 13 }}>{f.text}</div>
              ))}
            </div>
            <div className="ph-in">Message {role.name}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
