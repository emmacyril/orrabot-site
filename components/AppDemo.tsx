"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Orra } from "./Orra";
import { DEMO_ORGS, type Line } from "@/lib/content";

type Shown = Line & { key: string; decided?: "allowed" | "denied" };

function reducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** A scripted replica of the desktop app: switch organisation, pick a bot, approve, type. */
export function AppDemo() {
  const [orgId, setOrgId] = useState(DEMO_ORGS[0].id);
  const org = DEMO_ORGS.find((o) => o.id === orgId)!;
  const [botId, setBotId] = useState(org.bots[0].id);
  const bot = org.bots.find((b) => b.id === botId) ?? org.bots[0];
  const [lines, setLines] = useState<Shown[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const feed = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);

  const later = (fn: () => void, ms: number) => {
    if (reducedMotion()) fn();
    else timers.current.push(window.setTimeout(fn, ms));
  };

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setLines([]);
    bot.script.forEach((line, i) => {
      const add = () => setLines((prev) => [...prev, { ...line, key: `${bot.id}-${i}` }]);
      if (i === 0) add(); else later(add, i * 650);
    });
    return () => timers.current.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orgId, bot.id]);

  useEffect(() => {
    feed.current?.scrollTo({ top: feed.current.scrollHeight });
  }, [lines]);

  const chooseOrg = (id: string) => {
    const next = DEMO_ORGS.find((o) => o.id === id)!;
    setOrgId(id);
    setBotId(next.bots[0].id);
    setMenuOpen(false);
  };

  const decide = (key: string, allow: boolean) => {
    setLines((prev) => prev.map((l) => (l.key === key ? { ...l, decided: allow ? "allowed" : "denied" } : l)));
    later(() => setLines((prev) => [...prev, {
      kind: "bot", key: `${key}-reply`,
      text: allow ? "Done. I'll let you know when there's a reply." : "Okay, I won't. Tell me what to change.",
    }]), 450);
  };

  const send = (e: FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setDraft("");
    const k = `you-${Date.now()}`;
    setLines((prev) => [...prev, { kind: "you", text, key: k }]);
    later(() => setLines((prev) => [...prev, {
      kind: "bot", key: `${k}-r`,
      text: "On it. In the real app I'd start on this right away. This demo only plays scripted replies.",
    }]), 600);
  };

  return (
    <div className="stage">
      <div className="win" aria-label="Interactive demo of the OrraBot app">
        <div className="win-bar"><i /><i /><i /><span>OrraBot · {org.name}</span></div>
        <div className="app">
          <aside className="side">
            <div className="orgsw">
              <button type="button" aria-haspopup="true" aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
                <span className="mark" style={{ background: org.color }}>{org.mark}</span>
                <span><span className="t">{org.name}</span><br /><span className="s">{org.meta}</span></span>
                <span className="chev">⌄</span>
              </button>
              {menuOpen && (
                <div className="orgmenu">
                  <div className="lab">Organisations</div>
                  {DEMO_ORGS.map((o) => (
                    <button type="button" key={o.id} onClick={() => chooseOrg(o.id)}>
                      <span className="mark" style={{ background: o.color }}>{o.mark}</span>
                      <span><span className="t">{o.name}</span><br /><span className="s">{o.meta}</span></span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <ul className="bots">
              {org.bots.map((b) => (
                <li key={b.id}>
                  <button type="button" className="bot" aria-current={b.id === bot.id} onClick={() => setBotId(b.id)}>
                    <Orra color={b.color} />
                    <span><b>{b.name}</b><small>{b.preview}</small></span>
                    <time>{b.time}</time>
                  </button>
                </li>
              ))}
            </ul>
            <div className="me-row"><i>AO</i>Ada Okafor</div>
          </aside>
          <div className="chat">
            <div className="mobile-bots">
              {org.bots.map((b) => (
                <button type="button" key={b.id} aria-current={b.id === bot.id} onClick={() => setBotId(b.id)}>
                  <Orra color={b.color} />{b.name}
                </button>
              ))}
            </div>
            <div className="chat-top"><Orra color={bot.color} /><b>{bot.name}</b><span className="model">{bot.model}</span></div>
            <div className="feed" ref={feed} aria-live="polite">
              {lines.map((l) => {
                if (l.kind === "you") return <div key={l.key} className="m you">{l.text}</div>;
                if (l.kind === "bot") return <div key={l.key} className="m bot-m">{l.text}</div>;
                if (l.kind === "tool") return <div key={l.key} className="tool">{l.text}</div>;
                if (l.kind !== "ask") return null;
                return (
                  <div key={l.key} className="ask">
                    <b>{bot.name} wants to: {l.text}</b>
                    <p>{l.detail}</p>
                    {l.decided ? <p>{l.decided === "allowed" ? "Allowed by you" : "Denied by you"}</p> : (
                      <div className="acts">
                        <button type="button" className="y" onClick={() => decide(l.key, true)}>Allow</button>
                        <button type="button" onClick={() => decide(l.key, false)}>Deny</button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <form className="compose" onSubmit={send}>
              <label htmlFor="demo-msg" className="sr-only">Message {bot.name}</label>
              <input id="demo-msg" autoComplete="off" placeholder={`Message ${bot.name}`} value={draft} onChange={(e) => setDraft(e.target.value)} />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
      <p className="cap">A simulation: pick a bot, switch company from the top left, or type. Replies are scripted; the real app runs on your own machine.</p>
    </div>
  );
}
