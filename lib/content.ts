/** Public installer feed. The app source repo is private; never link to it. */
export const REPO = "https://github.com/emmacyril/orrabot-releases";
export const RELEASES = `${REPO}/releases`;
export const LATEST = `${RELEASES}/latest`;
/** Feedback and sales go through the contact form; there is no public mailbox. */
export const CONTACT_URL = "/contact";
export const contactHref = (topic: string) => `${CONTACT_URL}?topic=${encodeURIComponent(topic)}`;

export const EMI = {
  violet: "#FF6B3D",
  orange: "#FF7A45",
  green: "#20B486",
  blue: "#3D7BFF",
  pink: "#F25C9A",
  gold: "#F2B63D",
} as const;

export type Line =
  | { kind: "you" | "bot" | "tool"; text: string }
  | { kind: "ask"; text: string; detail: string };

export type DemoBot = { id: string; name: string; color: string; model: string; time: string; preview: string; script: Line[] };
export type DemoOrg = { id: string; name: string; mark: string; color: string; meta: string; bots: DemoBot[] };

export const DEMO_ORGS: DemoOrg[] = [
  {
    id: "kite", name: "Kite Studio", mark: "K", color: "#6A4DFF", meta: "5 bots · $142 of $400",
    bots: [
      { id: "inbox", name: "Inbox", color: EMI.violet, model: "Claude Sonnet", time: "7:31", preview: "Done. 26 archived, 9 drafts.", script: [
        { kind: "you", text: "Sweep my inbox before standup." },
        { kind: "tool", text: "Reading 58 unread threads" },
        { kind: "tool", text: "Archived 26 newsletters and receipts" },
        { kind: "tool", text: "Drafted 9 replies" },
        { kind: "bot", text: "Done. I archived 26, drafted 9 routine replies and left 6 for you. One is urgent: Maria at Lumen wants the revised quote by noon." },
      ] },
      { id: "cos", name: "Chief of Staff", color: EMI.green, model: "Claude Opus", time: "9:02", preview: "Split the launch across 3 bots.", script: [
        { kind: "you", text: "Plan Friday's launch for the Lumen site." },
        { kind: "bot", text: "I've split it three ways. Content writes the announcement, Design exports the social images, Dev runs the release check at 15:00. I'll post a status here at noon." },
      ] },
      { id: "finance", name: "Finance", color: EMI.gold, model: "Codex", time: "8:47", preview: "31.5 of 40 retainer hours.", script: [
        { kind: "you", text: "How are we doing on the Lumen retainer this month?" },
        { kind: "tool", text: "Read Harvest · September" },
        { kind: "bot", text: "31.5 of 40 hours used, with 8 days left. At this pace you'll run over by about 6 hours. Want me to draft a note to Maria about an extension?" },
        { kind: "ask", text: "Send email to maria@lumen.example", detail: "Gmail · draft attached" },
      ] },
      { id: "research", name: "Research", color: EMI.blue, model: "Grok 4", time: "Yesterday", preview: "3 competitors changed pricing.", script: [
        { kind: "you", text: "Anything new from our competitors this week?" },
        { kind: "tool", text: "Browsed 14 pages on its cloud desktop" },
        { kind: "bot", text: "Three changes. Fable Studio raised its starter plan to $4k. Norte added a monthly retainer. Pixelhaus now lists fixed-price brand sprints." },
      ] },
      { id: "dev", name: "Dev", color: EMI.pink, model: "Claude Sonnet", time: "Yesterday", preview: "Opened PR #418.", script: [
        { kind: "you", text: "The contact form on lumen.example is failing on Safari." },
        { kind: "tool", text: "Reproduced on a cloud desktop · Safari 18" },
        { kind: "tool", text: "Edited src/form.ts" },
        { kind: "bot", text: "Safari was rejecting the date field format. I fixed it, added a test and opened PR #418 for you to review." },
      ] },
    ],
  },
  {
    id: "northwind", name: "Northwind Bakery", mark: "N", color: "#E0673A", meta: "3 bots · $38 of $120",
    bots: [
      { id: "orders", name: "Orders", color: EMI.orange, model: "Claude Sonnet", time: "6:05", preview: "42 wholesale orders in.", script: [
        { kind: "you", text: "What's due for tomorrow's first bake?" },
        { kind: "tool", text: "Read Shopify orders" },
        { kind: "bot", text: "42 wholesale orders: 310 sourdough loaves, 180 croissants and 60 rye. That's 12% more croissants than last Thursday." },
      ] },
      { id: "accounts", name: "Accounts", color: EMI.green, model: "Codex", time: "Mon", preview: "3 invoices over 30 days.", script: [
        { kind: "you", text: "Which invoices are more than 30 days late?" },
        { kind: "bot", text: "Three: Café Orsa £420 (34 days), The Long Table £1,180 (41 days) and Pine Street Deli £265 (33 days). Reminders are drafted." },
        { kind: "ask", text: "Send 3 emails from accounts@northwind.example", detail: "Gmail · 3 drafts" },
      ] },
      { id: "social", name: "Social", color: EMI.pink, model: "Grok 4", time: "Sun", preview: "Posts scheduled to Friday.", script: [
        { kind: "you", text: "Write this week's Instagram posts." },
        { kind: "bot", text: "Five posts drafted around the new cardamom bun, with photos from Tuesday's shoot. They go out daily at 8:00 once you approve." },
      ] },
    ],
  },
  {
    id: "halden", name: "Halden & Co.", mark: "H", color: "#1F7A5C", meta: "3 bots · $311 of $400",
    bots: [
      { id: "contracts", name: "Contracts", color: EMI.green, model: "Claude Opus", time: "10:12", preview: "2 unusual clauses.", script: [
        { kind: "you", text: "Summarise the new supplier contract and flag anything unusual." },
        { kind: "tool", text: "Read Supplier-2026.pdf · 12 pages" },
        { kind: "bot", text: "Two clauses stand out: it renews automatically unless you give 90 days' notice (§8.2), and liability for data loss has no cap (§11.4). The rest is standard." },
        { kind: "ask", text: "Save summary to Drive › Halden › Contracts", detail: "Google Drive" },
      ] },
      { id: "intake", name: "Client intake", color: EMI.blue, model: "Claude Sonnet", time: "9:40", preview: "New enquiry from Brightwater.", script: [
        { kind: "you", text: "Anything new from the website form?" },
        { kind: "bot", text: "One enquiry from Brightwater Ltd about a lease dispute. I ran a conflict check against the client list: no match. A call is proposed for Thursday 14:00." },
      ] },
      { id: "billing", name: "Billing", color: EMI.gold, model: "Codex", time: "Fri", preview: "Budget at 78%.", script: [
        { kind: "you", text: "Where are we on the AI budget this month?" },
        { kind: "bot", text: "$311 of $400, which is 78%. You'll get a warning at 80%. Contracts is the biggest user, mostly long PDF reviews." },
      ] },
    ],
  },
];

export type Role = { name: string; color: string; lead: string; desc: string; feed: ({ kind: "draft"; subject: string; body: string } | { kind: "you" | "bot"; text: string })[] };

export const ROLES: Role[] = [
  { name: "Outreach", color: EMI.green, lead: "Fill the pipeline overnight.", desc: "Researches accounts, finds the right contact, drafts emails in your voice and leaves a list for you to approve.", feed: [
    { kind: "draft", subject: "Subject: A faster brand refresh for Brightwater", body: "Hi Dana, I saw Brightwater opened two new sites this spring. We've helped teams your size refresh signage and web in six weeks. Worth a 15-minute call next week?\n\nAda" },
    { kind: "you", text: "send the top 10, they look good" },
    { kind: "bot", text: "Sending the top 10. The other 14 stay queued for tomorrow." },
  ] },
  { name: "Bookkeeper", color: EMI.gold, lead: "Keep the books tidy.", desc: "Matches receipts to transactions, chases missing ones and flags anything that looks off before month end.", feed: [
    { kind: "bot", text: "Matched 128 of 131 transactions for September. Three receipts are missing: Figma, the Lisbon hotel and one Uber." },
    { kind: "you", text: "chase them" },
    { kind: "bot", text: "Asked Ben for the hotel receipt and pulled Figma and Uber from Gmail. All done." },
  ] },
  { name: "Recruiter", color: EMI.blue, lead: "Find people worth talking to.", desc: "Screens applicants against the role, writes short summaries and books first calls for the strongest ones.", feed: [
    { kind: "bot", text: "62 applied for Senior Designer. 7 match every must-have. Top pick: Lina Q., 8 years in brand systems, portfolio attached." },
    { kind: "you", text: "book calls with the top 3" },
    { kind: "bot", text: "Invites sent for Tuesday and Wednesday afternoons." },
  ] },
  { name: "Support", color: EMI.pink, lead: "Answer customers in minutes.", desc: "Replies to questions the help centre covers, and hands the rest to a person with a clear summary.", feed: [
    { kind: "bot", text: "31 new tickets overnight. I answered 24 from the help centre. 7 need you, sorted by urgency." },
    { kind: "you", text: "what's the top one?" },
    { kind: "bot", text: "A wholesale customer was charged twice for order #5521. Refund is drafted and waiting for approval." },
  ] },
  { name: "Chief of Staff", color: EMI.violet, lead: "Keep every bot on track.", desc: "Hands out work to the rest of the team, follows up on anything late and sends you one daily summary.", feed: [
    { kind: "bot", text: "Morning. 3 bots finished overnight, 1 is waiting on you (Finance, an email to Lumen). Research is still browsing." },
    { kind: "you", text: "approve Finance" },
    { kind: "bot", text: "Approved and sent. Next update at noon." },
  ] },
];

export const FEATURES = [
  { title: "A brain per bot", color: EMI.violet, shot: "model-picker", text: "Choose Claude, Codex or Grok models for each bot, and switch mid-conversation when a job needs more power." },
  { title: "Every bot gets a computer", color: EMI.blue, shot: "computer-panel", text: "A cloud desktop, a private VM or a desktop on your own server. Watch the screen live and take over whenever you like." },
  { title: "Asks before it acts", color: EMI.pink, shot: "approval-card", text: "Emails, commands and file edits arrive as cards to Allow or Deny. Set each bot from \"ask every time\" to full trust." },
  { title: "500+ connected apps", color: EMI.green, shot: "connected-apps", text: "Connect Gmail, Slack, GitHub, Notion, Linear and hundreds more once. Every bot in that organisation can use them." },
  { title: "Budgets, billing and brand", color: EMI.gold, shot: "org-settings", text: "Per organisation: a monthly budget, a billing markup for client invoices, and the client's own name, colour and logo." },
  { title: "Manage bots like chats", color: EMI.orange, shot: "context-menu", text: "Pin, mark unread, duplicate, hide or delete. Your bots behave like contacts in a messaging app." },
] as const;

export const JOBS = [
  { title: "Morning inbox", when: "Weekdays at 7:30", color: EMI.violet, text: "Clears newsletters, drafts routine replies and leaves the few that need you on top.", apps: ["Gmail"] },
  { title: "Late invoices", when: "Mondays at 9:00", color: EMI.orange, text: "Finds unpaid invoices, writes a friendly reminder for each and sends once you approve.", apps: ["Xero", "Gmail"] },
  { title: "Release check", when: "On every new tag", color: EMI.blue, text: "Installs the build on a clean computer, tries the main flows and posts screenshots of anything broken.", apps: ["GitHub"] },
  { title: "Code review", when: "On every pull request", color: EMI.pink, text: "Reads the change, points out real bugs and skips the nitpicks, before a person looks.", apps: ["GitHub"] },
  { title: "Competitor watch", when: "Daily at 6:00", color: EMI.green, text: "Checks rival pricing and changelog pages and reports only what changed.", apps: ["Browser"] },
  { title: "Week in numbers", when: "Fridays at 16:00", color: EMI.gold, text: "Revenue, signups and support volume in one short note for the team channel.", apps: ["Stripe", "Sheets"] },
  { title: "Support first pass", when: "Every 15 minutes", color: "#8B74FF", text: "Answers what the help centre already covers and hands the rest over with a summary.", apps: ["Intercom", "Linear"] },
  { title: "Client report", when: "1st of the month", color: "#E0673A", text: "Builds each client's monthly report, with that client's logo and your billable hours.", apps: ["Docs", "Harvest"] },
];

export const TIERS = [
  { name: "Personal", monthly: 0, yearly: 0, note: "Free forever", cta: "Download", href: "/download", primary: false,
    items: ["1 organisation", "Unlimited bots", "Computers, apps and voice", "All approval levels", "Your own AI plans and keys"] },
  { name: "Pro", monthly: 19, yearly: 190, note: "", cta: "Get Pro", href: contactHref("question"), primary: false,
    items: ["3 organisations", "Budgets and usage per organisation", "Billing export and audit log", "Email support"] },
  { name: "Pro Lifetime", badge: "Launch", once: 149, note: "Founder price for the first 300 buyers, then $199, then $249", cta: "Get Lifetime", href: contactHref("question"), primary: true,
    items: ["Everything in Pro, for good", "All future Pro features", "Founder badge and early builds", "Hosted add-ons billed separately"] },
  { name: "Agency", monthly: 99, yearly: 990, note: "10 client organisations, then $9 each", cta: "Get Agency", href: contactHref("question"), primary: false,
    items: ["Everything in Pro", "White-label per client", "Branded client reports", "Priority support"] },
] as const;

export const FAQS = [
  ["How is OrraBot different from an AI assistant?", "An assistant answers questions. OrraBot bots do the work: each has its own computer, signs in to your apps, runs on a schedule and asks before anything risky. You can run many at once."],
  ["What is an organisation?", "A completely separate workspace for one company: its own bots, Chief of Staff, channels, memory, AI logins, API keys, budget and brand. Only one runs at a time, and the others are locked on disk while you work."],
  ["Which AI do the bots use?", "Praxiom is built in: paste a Praxiom API key and your bots are ready. Turn on Other AI providers to also use Claude, Codex, DeepSeek, local models such as Ollama, or any OpenAI-compatible service. You pick a model per bot and can switch whenever you like."],
  ["How much does it cost to run?", "The Personal plan is free, with unlimited bots in one organisation. AI usage is billed by your provider as usual. Cloud desktops and hosted voices are billed by those services, only if you use them."],
  ["Does my data leave my computer?", "Transcripts, memory and keys stay on your machine. Bots send prompts to the AI provider you chose and use the apps you connected. OrraBot itself collects no analytics."],
  ["Can a bot control my own computer?", "Only if you turn it on, and only on macOS or Ubuntu with Xorg. Otherwise bots use a separate cloud desktop or a local virtual machine."],
  ["Where do I get help?", "The help centre at /docs covers setup, AI providers, automations, phones and backups. For anything else, use the contact form."],
] as const;
