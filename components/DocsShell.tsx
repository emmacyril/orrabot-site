import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Closing";
import { DOCS } from "@/lib/docs";

export function DocsShell({ current, children }: { current?: string; children: ReactNode }) {
  return (
    <>
      <Nav />
      <main className="sec wrap docs">
        <nav className="docs-side" aria-label="Help centre">
          <h4>Help centre</h4>
          <a href="/docs" aria-current={!current ? "page" : undefined}>Overview</a>
          {DOCS.map((d) => (
            <a key={d.slug} href={`/docs/${d.slug}`} aria-current={current === d.slug ? "page" : undefined}>{d.title}</a>
          ))}
          <a href="/contact">Contact us</a>
        </nav>
        <article className="prose">{children}</article>
      </main>
      <Footer />
    </>
  );
}
