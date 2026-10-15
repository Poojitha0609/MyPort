import Link from "next/link";
import Typewriter from "@/components/Typewriter";
import { color } from "@/components/brutal";
import { profile } from "@/data/resume";

// Sticker chips drifting around the edges of the screen
const floating = [
  { label: "React", pos: "left-[6%] top-[14%] -rotate-6", delay: "0s" },
  { label: "Node.js", pos: "right-[8%] top-[12%] rotate-3", delay: "1.2s" },
  { label: "Python", pos: "left-[10%] bottom-[18%] rotate-6", delay: "2.1s" },
  { label: "SQL", pos: "right-[12%] bottom-[22%] -rotate-3", delay: "0.6s" },
  { label: "AWS", pos: "left-[38%] bottom-[8%] rotate-2", delay: "1.8s" },
  { label: "MongoDB", pos: "right-[2%] top-[30%] -rotate-2", delay: "2.6s" },
  { label: "Git", pos: "left-[28%] top-[6%] rotate-3", delay: "3s" },
  { label: "Tailwind", pos: "right-[26%] bottom-[6%] -rotate-6", delay: "1.5s" },
];

// Badges travelling around the two orbit rings
const innerOrbit = ["JS", "Java", "C", "HTML"];
const outerOrbit = ["Express", "MySQL", "CSS", "Bootstrap", "Vercel", "React"];

function placeOnRing(items: string[]) {
  return items.map((label, i) => {
    const angle = (i / items.length) * 2 * Math.PI;
    return {
      label,
      left: `${50 + 50 * Math.cos(angle)}%`,
      top: `${50 + 50 * Math.sin(angle)}%`,
    };
  });
}

const codeLines = [
  { text: "const poojitha = {", color: "" },
  { text: '  role: "Software Engineer",', color: "text-lime" },
  { text: '  stack: ["React", "Node", "SQL"],', color: "text-aqua" },
  { text: "  pizza: Infinity,", color: "text-sun" },
  { text: "};", color: "" },
];

export default function Hello() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16">
      <div className="tech-grid animate-grid pointer-events-none absolute inset-0" />

      {floating.map((f, i) => (
        <span
          key={f.label}
          className={`pointer-events-none absolute hidden md:block ${f.pos}`}
        >
          <span
            className={`animate-float brutal block px-3 py-1.5 font-mono text-xs font-bold text-ink shadow-brutal-sm ${color(i).bg}`}
            style={{ animationDelay: f.delay }}
          >
            {`<${f.label} />`}
          </span>
        </span>
      ))}

      <div className="relative z-10 grid w-full max-w-5xl items-center gap-12 lg:grid-cols-2">
        {/* Greeting */}
        <div className="text-center lg:text-left">
          <p className="animate-fade-up font-mono text-sm font-bold text-lime">
            $ ./say-hello.sh
          </p>
          <h1
            className="animate-fade-up mt-4 text-6xl font-bold uppercase tracking-tight sm:text-8xl"
            style={{ animationDelay: "0.15s" }}
          >
            Hello
            <span className="animate-wave ml-3 inline-block origin-[70%_70%]">👋</span>
          </h1>
          <p
            className="animate-fade-up mt-5 text-2xl font-bold sm:text-3xl"
            style={{ animationDelay: "0.3s" }}
          >
            I&apos;m{" "}
            <span className="inline-block -rotate-2 rounded-lg border-[3px] border-paper bg-pink px-2 uppercase text-ink shadow-brutal-sm">
              {profile.name}
            </span>
          </p>
          <p
            className="animate-fade-up mt-5 h-8 font-mono text-lg text-dim sm:text-xl"
            style={{ animationDelay: "0.45s" }}
          >
            {"> "}
            <Typewriter
              words={[
                "Software Engineer",
                "React Developer",
                "UI/UX Enthusiast",
                "Problem Solver",
              ]}
            />
          </p>

          <div
            className="animate-fade-up mt-10 flex justify-center lg:justify-start"
            style={{ animationDelay: "0.6s" }}
          >
            <Link
              href="/home"
              className="brutal brutal-press group inline-flex items-center gap-2 bg-lime px-7 py-3.5 text-lg font-bold uppercase text-ink"
            >
              Enter Portfolio
              <span className="transition group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Orbit + code card */}
        <div className="relative mx-auto aspect-square w-[calc(100%-6rem)] max-w-[280px] sm:max-w-[420px]">
          <div className="animate-spin-slow orbit-ring absolute inset-0 rounded-full border-2 border-dashed border-paper/30">
            {placeOnRing(outerOrbit).map((b) => (
              <div key={b.label} className="absolute h-0 w-0" style={{ left: b.left, top: b.top }}>
                <span className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border-2 border-paper bg-panel px-3 py-1 font-mono text-xs font-bold">
                  {b.label}
                </span>
              </div>
            ))}
          </div>
          <div className="animate-spin-slow-reverse orbit-ring absolute inset-[18%] rounded-full border-2 border-dashed border-lime/50">
            {placeOnRing(innerOrbit).map((b, i) => (
              <div key={b.label} className="absolute h-0 w-0" style={{ left: b.left, top: b.top }}>
                <span
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-paper px-3 py-1 font-mono text-xs font-bold text-ink ${color(i + 1).bg}`}
                >
                  {b.label}
                </span>
              </div>
            ))}
          </div>

          {/* Code card in the middle */}
          <div className="absolute inset-[30%] flex items-center justify-center">
            <div className="brutal w-max shrink-0 bg-panel p-3 font-mono text-[8px] leading-relaxed sm:text-[11px]">
              <div className="mb-2 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full border border-ink bg-pink" />
                <span className="h-2.5 w-2.5 rounded-full border border-ink bg-sun" />
                <span className="h-2.5 w-2.5 rounded-full border border-ink bg-lime" />
              </div>
              {codeLines.map((l, i) => (
                <div
                  key={i}
                  className={`animate-fade-up whitespace-pre ${l.color}`}
                  style={{ animationDelay: `${0.8 + i * 0.25}s` }}
                >
                  {l.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
