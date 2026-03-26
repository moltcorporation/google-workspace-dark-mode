export const metadata = {
  title: "Privacy Policy | Dark Mode for Google Workspace",
  description: "Privacy policy for Dark Mode for Google Workspace Chrome extension",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white font-sans">
      <header className="border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600" />
            <span className="font-semibold text-lg">Dark Mode</span>
          </div>
          <a
            href="/"
            className="text-zinc-400 hover:text-white text-sm transition-colors"
          >
            Back to Home
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="space-y-8 text-zinc-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Overview
            </h2>
            <p>
              Dark Mode for Google Workspace is committed to protecting your
              privacy. This privacy policy explains what data we collect, how we
              use it, and your rights.
            </p>
            <p className="mt-3">
              Last updated: March 26, 2026
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What Data We Collect
            </h2>
            <p className="mb-4">
              Dark Mode for Google Workspace only stores one piece of
              information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400">
              <li>
                <strong className="text-white">Theme preference</strong>: Which
                dark theme you've selected (Dim, Midnight, or OLED Black) and
                whether the extension is enabled or disabled.
              </li>
            </ul>
            <p className="mt-4">
              This data is stored locally using{" "}
              <code className="bg-white/10 px-2 py-1 rounded text-sm">
                chrome.storage.sync
              </code>
              , which means it syncs securely across your Chrome devices if
              you're signed into Chrome. Google manages this sync, and the data
              is encrypted in transit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              What We Do NOT Collect
            </h2>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">✓</span>
                <span>
                  <strong className="text-white">No personal data</strong>: We
                  don't collect your name, email, or any identifying information
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">✓</span>
                <span>
                  <strong className="text-white">No browsing history</strong>:
                  We don't track which websites you visit or how you use Google
                  Workspace
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">✓</span>
                <span>
                  <strong className="text-white">No analytics</strong>: We don't
                  use analytics tools like Google Analytics
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">✓</span>
                <span>
                  <strong className="text-white">No external API calls</strong>
                  : The extension is 100% client-side and doesn't communicate
                  with external servers
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">✓</span>
                <span>
                  <strong className="text-white">No ads or tracking</strong>:
                  We don't use cookies, pixels, or other tracking technologies
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              How the Extension Works
            </h2>
            <p className="mb-4">
              Dark Mode for Google Workspace works entirely within your browser
              using standard web APIs:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400">
              <li>
                It injects CSS into Google Docs, Sheets, Slides, and Drive pages
              </li>
              <li>
                It uses <code className="bg-white/10 px-2 py-1 rounded text-sm">
                  chrome.storage.sync
                </code>{" "}
                to remember your theme preference
              </li>
              <li>
                It applies your chosen dark theme instantly without any server
                calls
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Paid Features
            </h2>
            <p className="mb-4">
              If you choose to upgrade to the Pro tier ($3/month):
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400">
              <li>
                <strong className="text-white">Stripe</strong> processes your
                payment. We don't store your credit card information — Stripe
                does securely
              </li>
              <li>
                Your subscription status is stored locally and synced via{" "}
                <code className="bg-white/10 px-2 py-1 rounded text-sm">
                  chrome.storage.sync
                </code>
              </li>
              <li>
                We don't receive or store any payment details beyond your
                subscription status
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Your Rights
            </h2>
            <p className="mb-4">You have full control over your data:</p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400">
              <li>
                <strong className="text-white">View your data</strong>: Open
                Chrome DevTools and check your extension's local storage
              </li>
              <li>
                <strong className="text-white">Delete your data</strong>: Click
                the extension icon and toggle "Disable" to erase your
                preferences, or uninstall the extension entirely
              </li>
              <li>
                <strong className="text-white">No retention</strong>: If you
                uninstall the extension, all data is deleted immediately
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Questions or Concerns?
            </h2>
            <p>
              If you have any questions about this privacy policy or your data,
              please reach out to us at{" "}
              <a
                href="https://github.com/moltcorporation/google-workspace-dark-mode"
                className="text-indigo-400 hover:text-indigo-300 transition-colors underline"
                target="_blank"
              >
                our GitHub repository
              </a>
              .
            </p>
          </section>

          <section className="pt-8 border-t border-white/10">
            <p className="text-xs text-zinc-500">
              Dark Mode for Google Workspace is built by{" "}
              <a
                href="https://moltcorporation.com"
                className="text-zinc-400 hover:text-white transition-colors"
                target="_blank"
              >
                Moltcorp
              </a>
              . This privacy policy may be updated at any time. We'll post
              updates here and on GitHub.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-3xl mx-auto px-6 py-8 text-center text-zinc-500 text-sm">
          <a
            href="/"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Back to Home
          </a>
        </div>
      </footer>
    </div>
  );
}
