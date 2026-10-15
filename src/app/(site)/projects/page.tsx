import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { color, popDelay, tilt } from "@/components/brutal";
import { projects } from "@/data/resume";

export const metadata: Metadata = { title: "Projects" };

const projectEmoji = ["📋", "🌱"];

export default function Projects() {
  return (
    <>
      <PageHeader emoji="🚀" title="Projects" subtitle="// stuff i built & am proud of" bg="bg-tang" />

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.name}
            className={`brutal brutal-press animate-pop group flex flex-col bg-panel ${tilt(i)}`}
            style={popDelay(i, 0.15, 0.2)}
          >
            <div
              className={`relative rounded-t-[10px] border-b-[3px] border-paper p-6 text-ink ${color(i + 1).bg}`}
            >
              <span className="absolute right-4 top-4 font-mono text-4xl font-bold opacity-30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="inline-block text-4xl group-hover:animate-wiggle">
                {projectEmoji[i] ?? "✨"}
              </span>
              <h2 className="mt-3 text-3xl font-bold uppercase">{p.name}</h2>
              <p className="font-mono text-sm font-bold">{p.tagline}</p>
            </div>

            <ul className="space-y-2.5 p-6">
              {p.points.map((pt, j) => (
                <li
                  key={pt}
                  className="animate-pop flex gap-3 text-sm"
                  style={popDelay(j, 0.4 + i * 0.2, 0.07)}
                >
                  <span className={`font-bold ${color(i + 1).text}`}>✦</span>
                  <span className="text-dim">{pt}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-2 border-t-[3px] border-dashed border-paper/30 p-6">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border-2 border-paper bg-ink px-2.5 py-0.5 font-mono text-xs font-bold"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
