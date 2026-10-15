"use client";

import { useState } from "react";

// Shows the email with a copy button, since mailto: links do nothing
// on devices without a default mail app.
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy my email:", email);
    }
  }

  return (
    <div className="flex max-w-full flex-wrap items-center gap-3 rounded-xl border-[3px] border-ink bg-paper py-2 pl-4 pr-2 font-mono text-sm font-bold text-ink">
      <span className="break-all">{email}</span>
      <button
        type="button"
        onClick={copy}
        className="rounded-lg border-2 border-ink bg-sun px-3 py-1 text-xs font-bold uppercase transition hover:-translate-y-0.5 active:translate-y-0.5"
      >
        {copied ? "copied ✓" : "copy"}
      </button>
    </div>
  );
}
