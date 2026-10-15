import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { color, popDelay, tilt } from "@/components/brutal";
import { education, experience, profile } from "@/data/resume";

export const metadata: Metadata = { title: "About" };

const facts = [
  { emoji: "📍", label: "based in", value: profile.location },
  { emoji: "💼", label: "currently", value: `${experience[0].title} @ ${experience[0].company}` },
  { emoji: "🎓", label: "studied", value: `B.Tech CSE · ${education.score}` },
  { emoji: "🛠️", label: "fav stack", value: "React · Node.js · SQL" },
];

const interests = ["UI/UX design", "web apps", "dashboards", "AI-assisted dev", "problem solving", "IoT tinkering"];

export default function About() {
  return (
    <>
      <PageHeader emoji="🧠" title="About me" subtitle="// the tl;dr version" bg="bg-pink" />

      <div className="grid gap-6 lg:grid-cols-5">
        <section className="brutal animate-pop bg-panel p-6 sm:p-8 lg:col-span-3" style={popDelay(1)}>
          <p className="font-mono text-sm text-lime">{"> cat about.txt"}</p>
          <p className="mt-4 text-lg leading-relaxed">{profile.summary}</p>
        </section>

        <section
          className="brutal animate-pop rotate-1 bg-sun p-6 text-ink lg:col-span-2"
          style={popDelay(2)}
        >
          <h2 className="text-xl font-bold uppercase">things i&apos;m into ✨</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {interests.map((t, i) => (
              <span
                key={t}
                className="animate-pop rounded-full border-2 border-ink bg-paper px-3 py-1 font-mono text-sm font-bold"
                style={popDelay(i, 0.4, 0.06)}
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((f, i) => (
          <div
            key={f.label}
            className={`brutal brutal-press animate-pop p-5 text-ink ${color(i + 3).bg} ${tilt(i)}`}
            style={popDelay(i, 0.45)}
          >
            <span className="text-3xl">{f.emoji}</span>
            <p className="mt-3 font-mono text-xs font-bold uppercase">{f.label}</p>
            <p className="mt-1 text-lg font-bold leading-snug">{f.value}</p>
          </div>
        ))}
      </div>
    </>
  );
}
