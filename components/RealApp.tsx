import Image from "next/image";

/** The actual desktop app, following the visitor's light or dark theme. */
export function RealApp() {
  return (
    <section className="sec wrap center" id="real-app">
      <h2 className="sec-title">And this is the real thing</h2>
      <p className="sec-sub">The OrraBot desktop app: bots in the sidebar, a Chief of Staff in charge, group chats for projects, and every tool call visible as it happens.</p>
      <div className="real-shot">
        <Image className="only-light" src="/screenshots/hero.png" alt="OrraBot desktop app, light skin" width={2880} height={1800} sizes="(max-width: 1160px) 100vw, 1100px" priority={false} />
        <Image className="only-dark" src="/screenshots/hero-dark.png" alt="OrraBot desktop app, Midnight skin" width={2880} height={1800} sizes="(max-width: 1160px) 100vw, 1100px" />
      </div>
      <div className="real-row">
        <figure><Image src="/screenshots/channel.png" alt="A group chat with several bots" width={2880} height={1800} sizes="(max-width: 860px) 100vw, 540px" /><figcaption>Group chats: @mention the bots you need.</figcaption></figure>
        <figure><Image src="/screenshots/onboarding.png" alt="Welcome to OrraBot" width={2880} height={1800} sizes="(max-width: 860px) 100vw, 540px" /><figcaption>A two-minute welcome gets your first bot running.</figcaption></figure>
      </div>
    </section>
  );
}
