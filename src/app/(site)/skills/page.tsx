import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { color, popDelay, tilt } from "@/components/brutal";
import { skills } from "@/data/resume";

export const metadata: Metadata = { title: "Skills" };

const groupEmoji: Record<string, string> = {
  Languages: "🔤",
  Frontend: "🎨",
  Backend: "⚙️",
  Databases: "🗄️",
  "Tools & Platforms": "🧰",
};

export default function Skills() {
  return (
    <>
      <PageHeader emoji="⚡" title="Skills" subtitle="// my toolkit, no cap" bg="bg-lime" />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <section
            key={s.group}
            className={`brutal brutal-press animate-pop overflow-hidden bg-panel ${tilt(i)}`}
            style={popDelay(i)}
          >
            <div
              className={`flex items-center justify-between border-b-[3px] border-paper px-5 py-3 text-ink ${color(i).bg}`}
            >
              <h2 className="text-lg font-bold uppercase">
                {groupEmoji[s.group]} {s.group}
              </h2>
              <span className="rounded-md border-2 border-ink bg-paper px-2 font-mono text-xs font-bold">
                {s.items.length}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 p-5">
              {s.items.map((item, j) => (
                <span
                  key={item}
                  className="animate-pop rounded-full border-2 border-paper px-3 py-1 font-mono text-sm font-bold transition hover:-translate-y-0.5 hover:bg-paper hover:text-ink"
                  style={popDelay(j, 0.3 + i * 0.1, 0.05)}
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
