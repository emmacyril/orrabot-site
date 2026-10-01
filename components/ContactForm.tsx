"use client";
import { useState } from "react";

const TYPES = [
  ["feedback", "Feedback"],
  ["bug", "Bug report"],
  ["question", "Question"],
] as const;

type State = { kind: "idle" } | { kind: "sending" } | { kind: "sent"; note?: string } | { kind: "error"; text: string };

export function ContactForm({ initialType }: { initialType: string }) {
  const [type, setType] = useState(TYPES.some(([v]) => v === initialType) ? initialType : "feedback");
  const [state, setState] = useState<State>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState({ kind: "sending" });
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; note?: string; relay?: string; payload?: unknown };
      if (res.ok && json.ok && json.relay) {
        // Validated by our server; deliver through FormSubmit's private alias from the browser.
        const r = await fetch(json.relay, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(json.payload),
        });
        const out = (await r.json().catch(() => ({}))) as { success?: string | boolean };
        if (r.ok && (out.success === true || out.success === "true")) {
          form.reset();
          setState({ kind: "sent" });
        } else setState({ kind: "error", text: "Sorry, your message could not be sent. Please try again later." });
      } else if (res.ok && json.ok) {
        form.reset();
        setState({ kind: "sent", note: json.note });
      } else setState({ kind: "error", text: json.error ?? "Something went wrong. Please try again." });
    } catch {
      setState({ kind: "error", text: "Network error. Check your connection and try again." });
    }
  }

  if (state.kind === "sent") {
    return (
      <div className="form-card form-done" role="status">
        <h2>Thanks, we got it.</h2>
        <p>{state.note ?? "Your message is on its way. If you asked a question, we'll reply to the email you gave."}</p>
        <button type="button" className="btn btn-quiet" onClick={() => setState({ kind: "idle" })}>Send another</button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate={false}>
      <fieldset className="seg" aria-label="What is this about?">
        <legend className="sr-only">What is this about?</legend>
        {TYPES.map(([v, label]) => (
          <button key={v} type="button" aria-pressed={type === v} onClick={() => setType(v)}>{label}</button>
        ))}
      </fieldset>
      <div className="field-row">
        <label className="field">
          <span>Name</span>
          <input name="name" required maxLength={100} autoComplete="name" />
        </label>
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" required maxLength={200} autoComplete="email" />
        </label>
      </div>
      <label className="field">
        <span>{type === "bug" ? "What happened? Include your OS and app version if you can." : type === "question" ? "Your question" : "Your feedback"}</span>
        <textarea name="message" required minLength={5} maxLength={5000} rows={7} />
      </label>
      {/* Honeypot: hidden from people, tempting to bots. */}
      <label className="hp" aria-hidden="true">
        Website<input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      {state.kind === "error" && <p className="form-err" role="alert">{state.text}</p>}
      <button className="btn btn-primary" type="submit" disabled={state.kind === "sending"}>
        {state.kind === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
