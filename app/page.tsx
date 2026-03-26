export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white font-sans">
      <header className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600" />
            <span className="font-semibold text-lg">Dark Mode</span>
          </div>
          <a
            href="#install"
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
              href="#install"
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

        {/* Before/After */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-12">
            See the difference
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Before */}
            <div className="rounded-xl overflow-hidden border border-white/10">
              <div className="bg-white/5 p-4 text-center text-sm font-semibold text-zinc-400 border-b border-white/10">
                Before
              </div>
              <div className="bg-white p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">Google Docs</div>
                  <p className="text-gray-700 text-sm">White interface, harsh lighting</p>
                </div>
              </div>
            </div>
            {/* After */}
            <div className="rounded-xl overflow-hidden border border-indigo-500/30">
              <div className="bg-indigo-500/10 p-4 text-center text-sm font-semibold text-indigo-300 border-b border-indigo-500/30">
                After
              </div>
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">Google Docs</div>
                  <p className="text-zinc-400 text-sm">Smooth dark theme, easy on the eyes</p>
                </div>
              </div>
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
            href="#"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-8 py-3 rounded-lg text-lg transition-colors"
          >
            Add to Chrome — Free
          </a>
          <p className="text-xs text-zinc-500 mt-4">
            Chrome Web Store listing coming soon
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
