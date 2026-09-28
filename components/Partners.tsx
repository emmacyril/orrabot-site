const GROUPS = [
  { label: "Models", desc: "Your login stays with the provider. OrraBot never bills you for AI usage.", items: [
    ["Claude", "Anthropic", "#D97757", "C"], ["Codex", "OpenAI", "#111111", "O"], ["Grok", "xAI", "#333333", "G"], ["Your own", "Any ACP CLI or API", "#6A4DFF", "+"],
  ] },
  { label: "Computers and apps", desc: "Where bots click, type and browse, and the apps they're allowed to use.", items: [
    ["Box", "Cloud desktops", "#20B486", "B"], ["Docker", "Local VM", "#3D7BFF", "D"], ["Composio", "500+ apps", "#F25C9A", "C"], ["ElevenLabs · Fish", "Voices", "#F2B63D", "V"],
  ] },
] as const;

export function Partners() {
  return (
    <section className="sec band">
      <div className="wrap">
        <h2 className="sec-title">Works with</h2>
        <p className="sec-sub">Each bot needs a brain, a computer and access to your apps. These are the services behind each one.</p>
        {GROUPS.map((g) => (
          <div className="pgroup" key={g.label}>
            <div className="lab">{g.label}</div>
            <p className="desc">{g.desc}</p>
            <div className="plist">
              {g.items.map(([name, sub, bg, mark]) => (
                <div className="pc" key={name}><span className="lg" style={{ background: bg }}>{mark}</span><div><b>{name}</b><span>{sub}</span></div></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
