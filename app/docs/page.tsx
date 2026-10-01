import type { Metadata } from "next";
import { DocsShell } from "@/components/DocsShell";
import { DOCS } from "@/lib/docs";

export const metadata: Metadata = {
  title: "Help centre · OrraBot",
  description: "Guides for setting up OrraBot: AI providers, bots, automations, connected apps, phones, backups and more.",
};

export default function DocsIndex() {
  return (
    <DocsShell>
      <span className="kicker">Help centre</span>
      <h1 style={{ marginTop: 12 }}>How can we help?</h1>
      <p className="lede">Short guides for running your AI team in OrraBot, for any company, client or department.</p>
      <div className="docs-cards">
        {DOCS.map((d) => (
          <a key={d.slug} href={`/docs/${d.slug}`}><b>{d.title}</b><span>{d.summary}</span></a>
        ))}
      </div>
      <p className="docs-next">Can’t find what you need? <a href="/contact?topic=question">Ask a question</a> or <a href="/contact?topic=bug">report a bug</a>.</p>
    </DocsShell>
  );
}
