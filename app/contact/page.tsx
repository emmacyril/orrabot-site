import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Closing";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact · OrraBot",
  description: "Send feedback, report a bug or ask a question about OrraBot.",
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ topic?: string | string[] }> }) {
  const { topic } = await searchParams;
  const initial = (Array.isArray(topic) ? topic[0] : topic) ?? "feedback";
  return (
    <>
      <Nav />
      <main className="sec wrap page-narrow">
        <span className="kicker">Contact</span>
        <h1 className="page-title">Talk to the OrraBot team</h1>
        <p className="sec-sub">Feedback, bug reports and questions all land with a person. Looking for how-to answers? Try the <a href="/docs">help centre</a> first.</p>
        <ContactForm initialType={initial} />
      </main>
      <Footer />
    </>
  );
}
