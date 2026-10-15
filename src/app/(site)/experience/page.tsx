import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { color, popDelay } from "@/components/brutal";
import { experience } from "@/data/resume";

export const metadata: Metadata = { title: "Experience" };

export default function Experience() {
  return (
    <>
      <PageHeader
        emoji="💼"
        title="Experience"
        subtitle="// where i've been shipping"
        bg="bg-aqua"
      />

      <ol className="space-y-10">
        {experience.map((e, i) => (
          <li
            key={e.company}
            className="brutal brutal-press animate-pop relative bg-panel"
            style={popDelay(i, 0.15, 0.2)}
          >
            <span className="brutal absolute -top-4 right-4 rotate-2 bg-sun px-3 py-1 font-mono text-xs font-bold text-ink shadow-brutal-sm">
              {e.period}
            </span>
            <div
              className={`rounded-t-[10px] border-b-[3px] border-paper px-6 pb-4 pt-6 text-ink ${color(i + 3).bg}`}
            >
              <h2 className="text-2xl font-bold uppercase leading-tight">{e.company}</h2>
              <p className="font-mono text-sm font-bold">
                {e.title} · {e.location}
              </p>
            </div>
            <ul className="space-y-3 p-6">
              {e.points.map((p, j) => (
                <li
                  key={p}
                  className="animate-pop flex gap-3"
                  style={popDelay(j, 0.35 + i * 0.2, 0.07)}
                >
                  <span className={`font-bold ${color(i + 3).text}`}>▸</span>
                  <span className="text-dim">{p}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </>
  );
}
