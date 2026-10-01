import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocsShell } from "@/components/DocsShell";
import { DOCS, findDoc } from "@/lib/docs";

export const dynamicParams = false;

export function generateStaticParams() {
  return DOCS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const doc = findDoc((await params).slug);
  return doc ? { title: `${doc.title} · OrraBot help`, description: doc.summary } : {};
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = findDoc(slug);
  if (!doc) notFound();
  const i = DOCS.indexOf(doc);
  const next = DOCS[i + 1];
  return (
    <DocsShell current={slug}>
      <h1>{doc.title}</h1>
      <p className="lede">{doc.summary}</p>
      {doc.body}
      <p className="docs-next">
        {next ? <>Next: <a href={`/docs/${next.slug}`}>{next.title}</a> · </> : null}
        Still stuck? <a href="/contact?topic=question">Contact us</a>
      </p>
    </DocsShell>
  );
}
