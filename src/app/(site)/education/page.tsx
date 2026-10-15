import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { color, popDelay, tilt } from "@/components/brutal";
import { certifications, education } from "@/data/resume";

export const metadata: Metadata = { title: "Education" };

const certEmoji = ["🍕", "🔬", "📊"];

export default function Education() {
  return (
    <>
      <PageHeader emoji="🎓" title="Education" subtitle="// degree + receipts" bg="bg-grape" />

      <section
        className="brutal brutal-press animate-pop relative bg-panel p-6 sm:p-8"
        style={popDelay(1)}
      >
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-xl">
            <p className="font-mono text-sm text-grape">{education.period}</p>
            <h2 className="mt-2 text-2xl font-bold uppercase leading-tight sm:text-3xl">
              {education.school}
            </h2>
            <p className="mt-2 text-dim">{education.degree}</p>
          </div>
          <div className="brutal rotate-3 bg-lime px-5 py-3 text-center text-ink">
            <p className="font-mono text-xs font-bold uppercase">CGPA</p>
            <p className="text-4xl font-bold">{education.score.match(/[\d.]+/)?.[0]}</p>
            <p className="font-mono text-xs font-bold">/ 10</p>
          </div>
        </div>
      </section>

      <h2
        className="animate-pop mb-6 mt-14 text-2xl font-bold uppercase"
        style={popDelay(2)}
      >
        Certifications 🏆
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {certifications.map((c, i) => {
          const [name, issuer] = c.split(" — ");
          return (
            <div
              key={c}
              className={`brutal brutal-press animate-pop flex flex-col p-5 text-ink ${color(i + 1).bg} ${tilt(i)}`}
              style={popDelay(i, 0.35)}
            >
              <span className="text-3xl">{certEmoji[i] ?? "🏅"}</span>
              <p className="mt-3 text-lg font-bold leading-snug">{name}</p>
              {issuer && (
                <p className="mt-auto pt-4 font-mono text-xs font-bold uppercase">{issuer}</p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
