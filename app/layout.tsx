import type { Metadata, Viewport } from "next";
import { Onest, JetBrains_Mono } from "next/font/google";
import { OrraSprite } from "@/components/Orra";
import "./globals.css";

const onest = Onest({ subsets: ["latin"], variable: "--font-onest", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap", weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://orrabot.ai"),
  title: "OrraBot: your AI team, one chat away",
  description: "Your own team of AI bots in a chat app, with a separate team for every company you run. Runs on the Claude, Codex and Grok you already use. Free for macOS, Windows and Linux.",
  openGraph: {
    title: "OrraBot: your AI team, one chat away",
    description: "Brief AI bots like teammates. Give every company its own team, budget and brand. Free desktop app.",
    url: "https://orrabot.ai",
    siteName: "OrraBot",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#F6F4FE" }, { media: "(prefers-color-scheme: dark)", color: "#0D0A1A" }],
};

// Applies a saved theme before paint so the page never flashes the wrong one.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${onest.variable} ${mono.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <OrraSprite />
        {children}
      </body>
    </html>
  );
}
