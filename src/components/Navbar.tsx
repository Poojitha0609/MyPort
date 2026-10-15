"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { color } from "@/components/brutal";

export const links = [
  { href: "/home", label: "Home", emoji: "🏠" },
  { href: "/about", label: "About", emoji: "🧠" },
  { href: "/skills", label: "Skills", emoji: "⚡" },
  { href: "/experience", label: "Experience", emoji: "💼" },
  { href: "/projects", label: "Projects", emoji: "🚀" },
  { href: "/education", label: "Education", emoji: "🎓" },
  { href: "/contact", label: "Contact", emoji: "📬" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // While the sidebar is open: lock page scroll and let Escape close it
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-20 border-b-[3px] border-paper bg-ink">
        <nav className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-3">
          <Link
            href="/"
            title="Back to Hello"
            className="brutal brutal-press shrink-0 -rotate-3 bg-pink px-2.5 py-1 font-mono text-sm font-bold text-ink shadow-brutal-sm"
          >
            PK✦
          </Link>

          {/* Desktop: links in the top bar */}
          <ul className="ml-auto hidden gap-2 py-1.5 md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-lg border-2 px-3 py-1.5 text-sm font-bold transition ${
                      active
                        ? "border-paper bg-lime text-ink shadow-brutal-sm"
                        : "border-transparent text-dim hover:border-paper hover:text-paper"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Phone: hamburger that opens the sidebar */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="sidebar"
            className="brutal brutal-press ml-auto grid h-10 w-10 place-items-center bg-lime text-xl font-bold text-ink shadow-brutal-sm md:hidden"
          >
            ☰
          </button>
        </nav>
      </header>

      {/* Phone sidebar + backdrop (always mounted so they can animate in and out) */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-30 bg-ink/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        id="sidebar"
        aria-label="Site menu"
        inert={!open}
        className={`fixed inset-y-0 right-0 z-40 flex w-72 max-w-[85vw] flex-col border-l-[3px] border-paper bg-panel transition-transform duration-300 ease-[cubic-bezier(0.34,1.3,0.64,1)] md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b-[3px] border-paper px-4 py-3">
          <span className="font-mono text-sm font-bold text-dim">{"// menu"}</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="brutal brutal-press grid h-10 w-10 place-items-center bg-pink text-lg font-bold text-ink shadow-brutal-sm"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-1 flex-col gap-3 overflow-y-auto overflow-x-hidden p-4 pr-5">
          {links.map((l, i) => {
            const active = pathname === l.href;
            return (
              <li
                key={l.href}
                className={`transition duration-300 ${open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
                style={{ transitionDelay: open ? `${0.08 + i * 0.04}s` : "0s" }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`brutal brutal-press flex items-center gap-3 px-4 py-3 text-lg font-bold uppercase ${
                    active ? `${color(i).bg} text-ink` : "bg-ink text-paper"
                  }`}
                >
                  <span>{l.emoji}</span>
                  {l.label}
                  {active && <span className="ml-auto font-mono text-xs">● here</span>}
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="border-t-[3px] border-paper px-4 py-3 text-center font-mono text-xs text-dim">
          tap outside or press esc to close
        </p>
      </aside>
    </>
  );
}
