import type { Metadata } from "next";
import CopyEmail from "@/components/CopyEmail";
import PageHeader from "@/components/PageHeader";
import { popDelay } from "@/components/brutal";
import { profile } from "@/data/resume";

export const metadata: Metadata = { title: "Contact" };

const socials = [
  { label: "LinkedIn", handle: "poojitha-kancharla", href: profile.linkedin, emoji: "💼", bg: "bg-aqua", tilt: "-rotate-1" },
  { label: "GitHub", handle: "Poojitha0609", href: profile.github, emoji: "🐙", bg: "bg-pink", tilt: "rotate-1" },
];

export default function Contact() {
  return (
    <>
      <PageHeader emoji="📬" title="Contact" subtitle="// let's build something cool" bg="bg-sun" />

      <section
        className="brutal animate-pop bg-lime p-6 text-ink sm:p-10"
        style={popDelay(1)}
      >
        <p className="font-mono text-sm font-bold uppercase">✉️ the inbox is open</p>
        <h2 className="mt-2 text-3xl font-bold uppercase leading-tight sm:text-5xl">
          got a role, idea or project? hit me up.
        </h2>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <CopyEmail email={profile.email} />
          {/* Gmail compose works in any browser; mailto: needs a desktop mail app */}
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
            target="_blank"
            rel="noreferrer"
            className="brutal brutal-press bg-ink px-5 py-3 font-bold text-paper"
          >
            send via gmail ↗
          </a>
        </div>
      </section>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {socials.map((s, i) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className={`brutal brutal-press animate-pop group flex items-center gap-5 p-6 text-ink ${s.bg} ${s.tilt}`}
            style={popDelay(i, 0.35, 0.15)}
          >
            <span className="brutal grid h-14 w-14 shrink-0 place-items-center bg-paper text-3xl shadow-brutal-sm group-hover:animate-wiggle">
              {s.emoji}
            </span>
            <span className="min-w-0">
              <span className="block text-2xl font-bold uppercase">{s.label}</span>
              <span className="block truncate font-mono text-sm font-bold">@{s.handle}</span>
            </span>
            <span className="ml-auto text-2xl font-bold transition group-hover:translate-x-1">↗</span>
          </a>
        ))}
      </div>
    </>
  );
}
