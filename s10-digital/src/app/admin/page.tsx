"use client";

import { useEffect, useState } from "react";
import { ArrowRight, RefreshCw, Save } from "lucide-react";

type FetchState = "idle" | "loading" | "saving" | "error" | "success";

export default function AdminPage() {
  const [jsonText, setJsonText] = useState("");
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<FetchState>("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        setStatus("loading");
        const res = await fetch("/api/content", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to load content");
        const data = await res.json();
        setJsonText(JSON.stringify(data, null, 2));
        setStatus("idle");
      } catch (error) {
        setStatus("error");
        setMessage(error instanceof Error ? error.message : "Unknown error");
      }
    };

    load();
  }, []);

  async function handleSave() {
    try {
      setStatus("saving");
      const parsed = JSON.parse(jsonText);
      const res = await fetch("/api/content", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(parsed, null, 2),
      });

      if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error?.error ?? "Failed to save content");
      }

      setStatus("success");
      setMessage("Content updated successfully. Refresh the site to view changes.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unexpected error");
    }
  }

  return (
    <main className="relative min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-4">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">
            Content Manager
          </h1>
          <p className="text-sm text-slate-400">
            Update the landing page content in JSON format. Backup the data
            before making major changes. This tool writes directly to
            <code className="ml-1 rounded-md bg-slate-900/80 px-2 py-1 text-xs">
              src/data/content.json
            </code>
            .
          </p>
        </header>
        <section className="space-y-5 rounded-3xl border border-slate-800/70 bg-slate-900/50 p-6 shadow-xl shadow-black/40">
          <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
            <label className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Admin token (optional)
              <input
                type="password"
                value={token}
                onChange={(event) => setToken(event.target.value)}
                placeholder="Only required if ADMIN_TOKEN is set"
                className="mt-2 w-full rounded-2xl border border-slate-700/60 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-300"
              />
            </label>
            <button
              type="button"
              onClick={handleSave}
              disabled={status === "loading" || status === "saving"}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-[2px] hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === "saving" ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  Saving…
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  Save content
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>
          <textarea
            value={jsonText}
            onChange={(event) => setJsonText(event.target.value)}
            spellCheck={false}
            className="min-h-[540px] w-full rounded-3xl border border-slate-800/70 bg-slate-950/80 px-5 py-4 font-mono text-xs leading-6 text-slate-200 outline-none transition-colors focus:border-cyan-300"
          />
          <p
            className={`text-sm ${
              status === "error"
                ? "text-rose-300"
                : status === "success"
                ? "text-emerald-300"
                : "text-slate-400"
            }`}
          >
            {status === "idle" && "Changes are applied instantly after saving."}
            {status === "loading" && "Loading content…"}
            {status === "saving" && "Saving your updates…"}
            {status === "error" && message}
            {status === "success" && message}
          </p>
        </section>
      </div>
    </main>
  );
}
