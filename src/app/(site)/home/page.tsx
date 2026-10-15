import type { Metadata } from "next";
import Link from "next/link";
import { color, popDelay, tilt } from "@/components/brutal";
import { profile, skills } from "@/data/resume";

export const metadata: Metadata = { title: "Home" };

const sections = [
  { href: "/about", label: "About", emoji: "🧠", blurb: "who i am & what i'm about" },
  { href: "/skills", label: "Skills", emoji: "⚡", blurb: "the stack i build with" },
  { href: "/experience", label: "Experience", emoji: "💼", blurb: "where i've shipped stuff" },
  { href: "/projects", label: "Projects", emoji: "🚀", blurb: "things i've built" },
  { href: "/education", label: "Education", emoji: "🎓", blurb: "degree + certs" },
  { href: "/contact", label: "Contact", emoji: "📬", blurb: "slide into my inbox" },
];

const ticker = skills.flatMap((s) => s.items);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="brutal animate-pop relative bg-panel p-6 sm:p-10">
        <span className="brutal absolute -top-4 right-4 rotate-3 bg-lime px-3 py-1 font-mono text-xs font-bold text-ink shadow-brutal-sm sm:right-8">
          ● open to work
        </span>
        <p className="font-mono text-sm text-lime">$ whoami</p>
        <h1 className="mt-3 text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl">
          {profile.name.split(" ")[0]}
          <br />
          <span className="mt-2 inline-block -rotate-1 rounded-lg border-[3px] border-paper bg-pink px-3 text-ink shadow-brutal">
            {profile.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-dim">
          {profile.role.toLowerCase()} from {profile.location.split(",")[0].toLowerCase()} who
          builds clean web apps, designs friendly UIs, and ships with React, Node & SQL ✌️
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="brutal brutal-press bg-lime px-5 py-3 font-bold text-ink"
          >
            see my projects →
          </Link>
          <Link href="/contact" className="brutal brutal-press bg-ink px-5 py-3 font-bold">
            say hi 👋
          </Link>
        </div>
      </section>

      {/* Scrolling skills ticker */}
      <div
        className="animate-pop -mx-4 my-14 -rotate-1 overflow-hidden border-y-[3px] border-paper bg-sun py-3 text-ink"
        style={popDelay(1)}
      >
        <div className="animate-marquee flex w-max gap-6 whitespace-nowrap font-mono text-sm font-bold uppercase">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i}>
              {t} <span className="ml-6">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Cards linking to each page */}
      <h2 className="animate-pop mb-6 font-mono text-sm uppercase text-dim" style={popDelay(2)}>
        {"// pick a door"}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((s, i) => (
          <Link
            key={s.href}
            href={s.href}
            className={`brutal brutal-press animate-pop group flex flex-col p-5 text-ink ${color(i).bg} ${tilt(i)}`}
            style={popDelay(i, 0.35)}
          >
            <span className="text-4xl group-hover:animate-wiggle">{s.emoji}</span>
            <span className="mt-4 text-2xl font-bold uppercase">{s.label}</span>
            <span className="mt-1 font-mono text-sm">{s.blurb}</span>
            <span className="mt-4 self-end text-2xl font-bold transition group-hover:translate-x-1">
              →
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
