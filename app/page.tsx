import CheckoutButton from "./checkout-button";

const CWS_URL =
  "https://chromewebstore.google.com/detail/google-workspace-dark-mode/PLACEHOLDER_CWS_ID";

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Dark Mode for Google Workspace",
    applicationCategory: "BrowserApplication",
    operatingSystem: "Chrome",
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free tier — 3 dark themes, Gmail, Docs, Sheets, Slides, Drive",
      },
      {
        "@type": "Offer",
        price: "3.00",
        priceCurrency: "USD",
        description: "Pro tier — custom themes, scheduling, per-document prefs",
      },
    ],
    description:
      "Free dark mode Chrome extension for Gmail, Google Docs, Sheets, Slides, and Drive. Choose from Dim, Midnight, or OLED Black themes.",
    aggregateRating: undefined,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white font-sans">
      <JsonLd />
      <header className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600" />
            <span className="font-semibold text-lg">Dark Mode</span>
          </div>
          <a
            href={CWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Install Free
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6">
            Dark Mode for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Google Workspace
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            Beautiful dark themes for Google Docs, Sheets, Slides, and Drive.
            Reduce eye strain. Work comfortably day and night.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-8 py-3 rounded-lg text-lg transition-colors"
            >
              Add to Chrome — Free
            </a>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-12">
            Everything you need for a comfortable workspace
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-lg font-semibold mb-2">3 Dark Themes</h3>
              <p className="text-zinc-400 text-sm">
                Choose from Dim, Midnight, or OLED Black. Each carefully crafted
                for readability and comfort.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Instant Toggle</h3>
              <p className="text-zinc-400 text-sm">
                One click to enable or disable. Your preference syncs across
                devices automatically.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold mb-2">Privacy First</h3>
              <p className="text-zinc-400 text-sm">
                No data collection. No analytics. No external requests. Works
                entirely in your browser.
              </p>
            </div>
          </div>
        </section>

        {/* Supported Apps */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-12">
            Works with all Google Workspace apps
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { name: "Google Docs", icon: "📄" },
              { name: "Google Sheets", icon: "📊" },
              { name: "Google Slides", icon: "📽️" },
              { name: "Google Drive", icon: "📁" },
            ].map((app) => (
              <div
                key={app.name}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <div className="text-4xl mb-3">{app.icon}</div>
                <div className="text-sm font-medium">{app.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-4">
            Free forever. Pro when you want more.
          </h2>
          <p className="text-zinc-400 text-center mb-12 max-w-xl mx-auto">
            The free tier covers everything you need. Pro unlocks customization
            and scheduling for power users.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="text-sm font-medium text-zinc-400 mb-2">Free</div>
              <div className="text-3xl font-bold mb-4">$0</div>
              <ul className="text-sm text-zinc-400 space-y-3 mb-8">
                <li className="flex gap-2"><span className="text-indigo-400">&#10003;</span> 3 dark themes</li>
                <li className="flex gap-2"><span className="text-indigo-400">&#10003;</span> Docs, Sheets, Slides, Drive</li>
                <li className="flex gap-2"><span className="text-indigo-400">&#10003;</span> Keyboard shortcut toggle</li>
                <li className="flex gap-2"><span className="text-indigo-400">&#10003;</span> Cross-device sync</li>
                <li className="flex gap-2"><span className="text-indigo-400">&#10003;</span> No account required</li>
              </ul>
              <a
                href={CWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-white/10 hover:bg-white/15 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Install Free
              </a>
            </div>
            <div className="bg-gradient-to-b from-indigo-500/10 to-purple-500/10 rounded-xl p-8 border border-indigo-500/30">
              <div className="text-sm font-medium text-indigo-400 mb-2">Pro</div>
              <div className="text-3xl font-bold mb-1">$3<span className="text-lg font-normal text-zinc-400">/mo</span></div>
              <div className="text-xs text-zinc-500 mb-4">Cancel anytime</div>
              <ul className="text-sm text-zinc-400 space-y-3 mb-8">
                <li className="flex gap-2"><span className="text-indigo-400">&#10003;</span> Everything in Free</li>
                <li className="flex gap-2"><span className="text-purple-400">&#10003;</span> Custom color themes</li>
                <li className="flex gap-2"><span className="text-purple-400">&#10003;</span> Scheduled dark mode</li>
                <li className="flex gap-2"><span className="text-purple-400">&#10003;</span> Per-document preferences</li>
                <li className="flex gap-2"><span className="text-purple-400">&#10003;</span> Priority support</li>
              </ul>
              <CheckoutButton />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="install" className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to go dark?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Install the free Chrome extension and transform your Google
            Workspace experience. No account required.
          </p>
          <a
            href={CWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-8 py-3 rounded-lg text-lg transition-colors"
          >
            Add to Chrome — Free
          </a>
          <p className="text-xs text-zinc-500 mt-4">
            Available on the Chrome Web Store
          </p>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center text-zinc-500 text-sm">
          <p>
            Dark Mode for Google Workspace is built by{" "}
            <a
              href="https://moltcorporation.com"
              className="text-zinc-400 hover:text-white transition-colors"
              target="_blank"
            >
              Moltcorp
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
