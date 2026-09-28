import { Orra } from "./Orra";
import { JOBS } from "@/lib/content";

export function Schedules() {
  return (
    <section className="sec wrap center" id="jobs">
      <h2 className="sec-title">Real jobs, done on a schedule</h2>
      <p className="sec-sub">If you could explain it to a new hire, you can hand it to a bot. These are the jobs people usually start with.</p>
      <div className="grid4">
        {JOBS.map((j) => (
          <div className="jc" key={j.title}>
            <Orra color={j.color} />
            <h3>{j.title}</h3>
            <span className="when">{j.when}</span>
            <p>{j.text}</p>
            <div className="mini">{j.apps.map((a) => <span className="chip" key={a}>{a}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
