import type { ReactNode } from "react";

export type Doc = { slug: string; title: string; summary: string; body: ReactNode };

const K = ({ children }: { children: ReactNode }) => <kbd>{children}</kbd>;

export const DOCS: Doc[] = [
  {
    slug: "getting-started",
    title: "Getting started",
    summary: "Install OrraBot, set up your organisation and create your first bot.",
    body: (
      <>
        <h2>1. Install</h2>
        <ul>
          <li><b>macOS:</b> open the .dmg and drag OrraBot to Applications. If macOS blocks the first launch, right-click the app and choose <b>Open</b>.</li>
          <li><b>Windows:</b> run the setup .exe. If SmartScreen shows “unknown publisher”, choose <b>More info → Run anyway</b>.</li>
          <li><b>Linux:</b> install the .deb on Ubuntu/Debian, or run the .AppImage on other distributions.</li>
        </ul>
        <p>Get the installers from the <a href="/download">download page</a>.</p>
        <h2>2. First run</h2>
        <ol>
          <li>On <b>Welcome to OrraBot</b>, enter your name (or choose <b>Maybe later</b>) and press <b>Continue</b>.</li>
          <li><b>Your engines</b> shows which AI engines are <b>Ready</b> and which <b>Need setup</b>. Connect Praxiom here (see <a href="/docs/ai-providers">AI providers</a>).</li>
          <li><b>Meet your first bot</b>: give it a <b>Bot name</b>, a <b>Color</b> and <b>One standing instruction</b>, then press <b>Start chatting</b>.</li>
        </ol>
        <h2>3. Name your organisation</h2>
        <p>An organisation is a separate workspace for one company, client or department, with its own bots, Chief of Staff, channels, memory, AI logins and API keys. Your first one is called “My organisation”. Rename it from the menu bar: <b>Organisations → Rename Current Organisation…</b></p>
        <p>To add another, choose <b>Organisations → New Organisation…</b> (<K>⌘⇧O</K> / <K>Ctrl+Shift+O</K>), enter the <b>Organisation or company name</b>, then pick <b>Open</b> or <b>Stay here</b>.</p>
        <h2>4. Create more bots</h2>
        <p>In the sidebar choose <b>New → New Bot</b> (<K>⌘N</K> / <K>Ctrl+N</K>). Start from a <b>Blank bot</b> (send it <code>/setup</code> to shape its role) or a <b>Starting role</b> from the built-in roles, then press <b>Create bot</b>.</p>
      </>
    ),
  },
  {
    slug: "ai-providers",
    title: "AI providers",
    summary: "Praxiom is built in. Turn on other providers when you need them.",
    body: (
      <>
        <h2>Praxiom (default)</h2>
        <p>Praxiom is OrraBot’s AI provider, and new bots start on it.</p>
        <ol>
          <li>Get an API key at <a href="https://cloud.praxiomai.io">cloud.praxiomai.io</a>.</li>
          <li>In the <b>Connect Praxiom</b> card, paste it into <b>Praxiom API key</b> and press <b>Connect</b>. OrraBot checks the key with Praxiom before saving it.</li>
        </ol>
        <h2>Other AI providers</h2>
        <p>The <b>Other AI providers</b> switch is off by default. Turn it on in <b>Settings → Engines</b>, or at the bottom of the model picker, to also use Claude, Codex, DeepSeek, local models or your own provider. Bots already using another engine keep it.</p>
        <h2>Add a provider</h2>
        <p>With the switch on, choose <b>Add AI provider</b> in the model picker (or in Settings → Engines). Pick a preset:</p>
        <ul>
          <li><b>Ollama (on this computer)</b></li>
          <li><b>LM Studio (on this computer)</b></li>
          <li><b>DeepSeek</b></li>
          <li><b>Custom (any OpenAI-compatible endpoint)</b></li>
        </ul>
        <p>Fill in the address, API key (leave empty for local models) and <b>Model ID</b>. When you see “Connected — the model answered.” it appears under <b>Your AI providers</b>. Keys are kept on this computer.</p>
        <p className="tip">Running a local model? Start Ollama, LM Studio or a similar server first, then reopen the model picker.</p>
        <h2>Other API keys</h2>
        <p><b>Settings → Connections → Model providers</b> also accepts Anthropic, OpenAI-compatible (with a base URL, e.g. for OpenRouter or Groq), xAI and Mistral keys.</p>
      </>
    ),
  },
  {
    slug: "bots-and-groups",
    title: "Bots and group chats",
    summary: "Organise bots, pick a Chief of Staff and bring bots together in group chats.",
    body: (
      <>
        <h2>The sidebar</h2>
        <p>Bots are listed like contacts under <b>Pinned</b>, <b>Group chats</b>, <b>Bot threads</b> and <b>Bots</b>. You’ll also find <b>Team map</b>, <b>Automations</b>, <b>Connected apps</b> and <b>Templates</b>. Change the look with the density options <b>Comfortable</b>, <b>Compact</b> or <b>Avatars only</b>.</p>
        <h2>Bot actions</h2>
        <p>Right-click a bot for <b>Pin</b>, <b>Make Chief of Staff</b>, <b>Move to team</b>, <b>Mark as Unread</b>, <b>Edit Profile</b>, <b>Duplicate</b> and <b>Archive</b>. Archived bots stay under <b>Archived bots</b>, where you can <b>Restore</b> them.</p>
        <h2>Chief of Staff</h2>
        <p>One bot per organisation can be the Chief of Staff, which hands out work to the others and follows up. It needs a Claude or ACP engine.</p>
        <h2>Group chats</h2>
        <p>Choose <b>New group chat</b>, give it a name (for example “Website launch”), optionally a team, pick the bots and press <b>Create group chat</b>. You need at least one bot first.</p>
        <h2>Teams</h2>
        <p>Group bots into sections with <b>New team…</b>. Reorder sections with <K>⌥↑</K>/<K>⌥↓</K> (<K>Alt</K> on Windows and Linux).</p>
      </>
    ),
  },
  {
    slug: "automations",
    title: "Automations",
    summary: "Schedules, run logs and webhooks that start work without you.",
    body: (
      <>
        <p>Open <b>Automations</b> in the sidebar. It has three tabs: <b>Schedule</b>, <b>Run logs</b> and <b>Webhooks</b>. Use <b>New automation</b> to create one.</p>
        <h2>Schedules</h2>
        <ul>
          <li><b>Scheduled task:</b> ask a bot to do something later or on repeat.</li>
          <li><b>Scheduled call:</b> bring several bots together at a set time.</li>
        </ul>
        <p>Choose where results go with <b>Post results to</b> (for example a dedicated results thread), and what happens <b>If the previous run is still working</b>: <b>Skip this occurrence</b> or <b>Queue one run</b>.</p>
        <h2>Run logs</h2>
        <p>Every run is listed with how it started (scheduled, manual or webhook) and its status: queued, running, waiting, completed, failed, cancelled or missed. Search and filter by status; <b>Mark all as read</b> clears the failure count.</p>
        <h2>Webhooks</h2>
        <ol>
          <li>In <b>Webhooks</b>, choose <b>Create your first webhook</b>, pick the bot that receives tasks and press <b>Create webhook</b>.</li>
          <li>Copy the private URL. It is shown once. The <b>Setup</b> tab’s <b>Copy command</b> gives a ready-made test command.</li>
          <li>Send a POST with a JSON body such as <code>{`{"task":"Summarise today's orders"}`}</code>. The new webhook shows <b>Waiting for test</b>, then <b>Request received</b>. Press <b>Turn on</b>.</li>
        </ol>
        <p>Instead of keeping the secret in the URL, you can send it as an <code>Authorization: Bearer …</code> header. <b>Generate new private URL</b> replaces the secret, so old commands stop working. <b>Advanced options</b> let you set default instructions, where to run, accepted event types and how many unfinished tasks are allowed at once.</p>
        <p className="tip">Keep OrraBot open so it can receive webhook requests.</p>
      </>
    ),
  },
  {
    slug: "mcp-servers",
    title: "MCP servers",
    summary: "Give bots extra tools by connecting MCP servers.",
    body: (
      <>
        <p>Go to <b>Plugins → MCP servers → Add server</b>. There are three ways to add one:</p>
        <ul>
          <li><b>Run a command</b> (local): enter a <b>Server name</b>, the <b>Executable command</b>, <b>Arguments</b> (one per line) and <b>Environment</b> (<code>KEY=value</code> per line).</li>
          <li><b>Connect to a URL</b>: choose Streamable HTTP, or SSE for older servers. Put tokens in a header such as <code>Authorization: Bearer …</code>, never in the address. Servers that only offer an OAuth sign-in are not supported.</li>
          <li><b>Paste config</b>: paste an <code>{`{"mcpServers": {…}}`}</code> block from another MCP client.</li>
        </ul>
        <p>New servers are saved switched off. Press <b>Test</b>, then turn the server on. No restart is needed.</p>
        <h2>Per bot</h2>
        <p>Every enabled server is available to every bot by default. To limit a bot, open its <b>Tools → Access → MCP servers</b>. <b>Use every enabled server</b> returns it to the default.</p>
      </>
    ),
  },
  {
    slug: "connected-apps",
    title: "Connected apps",
    summary: "Connect Gmail, Slack, Notion and hundreds more through Composio.",
    body: (
      <>
        <p>Connected apps let bots use the tools your organisation already has. They run through your own free Composio account; each organisation uses its own key.</p>
        <ol>
          <li>Create a free account at <a href="https://composio.dev">composio.dev</a>.</li>
          <li>Copy a key: a project key (starts with <code>ak_</code>) from the project’s <b>Settings → API keys</b>, or a Composio Connect key (starts with <code>ck_</code>) from <b>Sessions &amp; API Key</b>.</li>
          <li>In OrraBot, open <b>Connected apps</b> in the sidebar. On <b>Turn on connected apps</b>, paste the key and press <b>Save</b>.</li>
        </ol>
        <p>You can also enter or change it in <b>Settings → Connections → Connected apps (Composio key)</b>. The key stays on this computer.</p>
        <p className="tip">“Composio did not accept that key”? Check you copied the whole key, including the <code>ak_</code> or <code>ck_</code> prefix.</p>
      </>
    ),
  },
  {
    slug: "phone-and-remote-access",
    title: "Phone and remote access",
    summary: "Pair your phone or another computer, and reach your bots on the go.",
    body: (
      <>
        <p>Open <b>Settings → Remote access</b> (or <b>Pair a device</b> in the sidebar). Choose how devices connect:</p>
        <ul>
          <li><b>Secure HTTPS pairing</b> (recommended): works from anywhere through a secure tunnel. You confirm with a code sent to your email.</li>
          <li><b>Tailscale pairing</b>: for devices on your Tailscale network (MagicDNS required).</li>
          <li><b>Direct Wi-Fi pairing</b>: for devices on the same network.</li>
        </ul>
        <h2>Pair a phone</h2>
        <ol>
          <li>Install the OrraBot companion app on your phone (Android: from the <a href="/download">download page</a>).</li>
          <li>On the desktop, choose <b>Pair a phone or another computer → Create pairing code</b>. Pick <b>Full access</b> or <b>Chat and approvals only</b>.</li>
          <li>Scan the QR code in the phone app, or under <b>Having trouble?</b> type the <b>Pairing address</b> and <b>Manual code</b>.</li>
        </ol>
        <p>Codes work once and expire after five minutes. Use <b>Create a new code</b> if one runs out.</p>
        <h2>Manage devices</h2>
        <p><b>Paired devices</b> lists everything connected, with an <b>Allow computer view</b> switch for each device. Turn on <b>Keep this computer awake</b> so bots stay reachable.</p>
        <h2>Control another computer</h2>
        <p><b>Connect to another computer</b> turns this desktop into a client of another OrraBot desktop, using the code shown there.</p>
      </>
    ),
  },
  {
    slug: "backups",
    title: "Backups",
    summary: "Export and restore a full, password-protected backup.",
    body: (
      <>
        <h2>Export</h2>
        <ol>
          <li>Open <b>Settings → Backups</b> and choose <b>Export full backup</b>.</li>
          <li>Set a <b>Backup password</b> of at least 12 characters and confirm it. The password cannot be recovered, so store it safely.</li>
          <li>Save the encrypted <code>.ombbackup</code> file.</li>
        </ol>
        <p><b>Included:</b> bots, conversations, instructions, local files, non-secret settings, drafts and preferences.<br /><b>Not included:</b> saved account credentials and connections, external sign-ins and remote virtual machine disks. Reconnect these after restoring.</p>
        <h2>Import</h2>
        <ol>
          <li>Choose <b>Import backup</b> and pick the <code>.ombbackup</code> file (up to 10 GB).</li>
          <li>Enter the password and press <b>Validate backup</b>.</li>
          <li>Type <code>REPLACE</code> to confirm, then <b>Replace installation</b>. OrraBot restarts.</li>
        </ol>
        <p className="tip">Importing replaces everything; it does not merge. OrraBot keeps a safety backup of your current data first. Schedules, webhooks and scheduled calls arrive paused so nothing runs by surprise.</p>
      </>
    ),
  },
  {
    slug: "keyboard-shortcuts",
    title: "Keyboard shortcuts",
    summary: "Move around OrraBot without the mouse.",
    body: (
      <>
        <p>On Windows and Linux, use <K>Ctrl</K> for <K>⌘</K> and <K>Alt</K> for <K>⌥</K>. Press <K>⌘/</K> in the app to see the cheat sheet.</p>
        <table>
          <thead><tr><th>Shortcut</th><th>Action</th></tr></thead>
          <tbody>
            {[
              ["⌘K", "Command palette"],
              ["⌘N", "New bot"],
              ["⌘⇧O", "New organisation"],
              ["⌘1 – ⌘9", "Jump to a bot"],
              ["⌘⇧[  /  ⌘⇧]", "Previous / next bot"],
              ["⌘F", "Find in conversation"],
              ["Return", "Send message"],
              ["⇧Return", "New line"],
              ["↑", "Edit your last message (empty composer)"],
              ["Esc", "Close panel"],
              ["⌘Return", "Save group instructions"],
              ["⌥↑  /  ⌥↓", "Reorder sidebar sections"],
              ["⌘,", "Settings (macOS)"],
              ["⌘/  or  ?", "Keyboard cheat sheet"],
            ].map(([k, a]) => <tr key={k}><td><K>{k}</K></td><td>{a}</td></tr>)}
          </tbody>
        </table>
      </>
    ),
  },
  {
    slug: "updates",
    title: "Updates",
    summary: "How OrraBot checks for and installs new versions.",
    body: (
      <>
        <p>OrraBot checks for a new version shortly after it starts, then every hour. Nothing downloads until you say so.</p>
        <ul>
          <li>Open <b>Settings → General → Updates</b> and press <b>Check for updates</b>.</li>
          <li>When a version is available, press <b>Download</b>, then <b>Restart and install</b>. On macOS a downloaded update also installs when you quit.</li>
          <li>The profile menu shows “Version X available” when there’s something new.</li>
        </ul>
        <p>You can always install the newest version by hand from the <a href="/download">download page</a>; your bots and data are kept.</p>
      </>
    ),
  },
  {
    slug: "troubleshooting",
    title: "Troubleshooting",
    summary: "Fixes for common problems, and how to send us diagnostics.",
    body: (
      <>
        <h2>A bot says it can’t reach its AI</h2>
        <p>Check <b>Settings → Engines</b>. Make sure Praxiom is connected (or that the provider the bot uses is set up), and that the key is still valid. For local models, make sure the model server is running.</p>
        <h2>Bots stopped taking new work</h2>
        <p>The organisation may have hit its monthly budget. Check <b>Organisations → Usage This Month…</b> and raise the limit in <b>Brand, Budget and Billing…</b>.</p>
        <h2>“Permission denied” on another organisation’s files</h2>
        <p>Only one organisation is open at a time, and the others are locked on disk. Switch to that organisation first.</p>
        <h2>macOS or Windows blocks the installer</h2>
        <p>macOS: right-click the app and choose <b>Open</b>. Windows SmartScreen: <b>More info → Run anyway</b>.</p>
        <h2>The phone won’t pair</h2>
        <p>Pairing codes expire after five minutes; create a new one. For Direct Wi-Fi pairing both devices must be on the same network. Try <b>Secure HTTPS pairing</b> if the network blocks local connections.</p>
        <h2>Webhooks don’t fire</h2>
        <p>OrraBot must be open, the webhook turned on, and the URL current. If you generated a new private URL, update the sender.</p>
        <h2>Send us diagnostics</h2>
        <p>Choose <b>Settings → General → Diagnostics → Export Diagnostics…</b>. It saves a text file with versions, settings and recent logs, with secrets removed. Attach what it tells you to a <a href="/contact?topic=bug">bug report</a>.</p>
        <h2>Where your data lives</h2>
        <p>Bots, chats, schedules and memory are stored per organisation under <code>~/.orrabot/orgs/</code>. Make a <a href="/docs/backups">backup</a> before moving or resetting anything.</p>
      </>
    ),
  },
];

export const findDoc = (slug: string) => DOCS.find((d) => d.slug === slug);
