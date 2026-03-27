"use client";

import { useState, FormEvent } from "react";

export default function CheckoutButton() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 409 && data.licenseKey) {
          window.location.href = `/pro/success?license_key=${data.licenseKey}`;
          return;
        }
        setError(data.error || "Something went wrong");
        setLoading(false);
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setError("Failed to start checkout. Please try again.");
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="block w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-lg transition-colors cursor-pointer"
      >
        Upgrade to Pro
      </button>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowModal(false);
              setError("");
            }
          }}
        >
          <div className="bg-[#1a1a2e] border border-white/10 rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-xl font-bold text-white mb-2">
              Upgrade to Pro
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              Enter your email to start your $3/month subscription. Cancel
              anytime.
            </p>

            <form onSubmit={handleSubmit}>
              <label
                htmlFor="checkout-email"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                Email address
              </label>
              <input
                id="checkout-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-[#252538] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mb-4"
              />

              {error && (
                <p className="text-red-400 text-sm mb-4">{error}</p>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setError("");
                  }}
                  className="flex-1 bg-white/10 hover:bg-white/15 text-white font-medium px-4 py-3 rounded-lg transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-4 py-3 rounded-lg transition-colors cursor-pointer"
                >
                  {loading ? "Redirecting..." : "Continue to Payment"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
