import { Orra } from "./Orra";
import { EMI } from "@/lib/content";

export function HowItWorks() {
  return (
    <section className="wrap" style={{ paddingBottom: "clamp(72px,9vw,120px)" }}>
      <h2 className="sec-title">How it works</h2>
      <div className="how">
        <div><Orra color={EMI.violet} /><h3>Your AI, your machine</h3><p>Bots run through the claude, codex and grok tools already on your computer, with your own logins and plans. Nothing sits in between.</p></div>
        <div><Orra color={EMI.green} /><h3>One small local server</h3><p>A server on <code>127.0.0.1</code> runs every bot and streams their work into the app as it happens.</p></div>
        <div><Orra color={EMI.orange} /><h3>Your data stays home</h3><p>Transcripts, memory and keys live in <code>~/.orrabot</code>, in a separate folder for each organisation. No analytics.</p></div>
      </div>
    </section>
  );
}
