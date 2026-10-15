import Section from "@/components/Section";
import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skills,
} from "@/data/resume";

const nav = ["about", "skills", "experience", "projects", "education", "contact"];

const card = "rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6";
const chip =
  "rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <a href="#top" className="font-bold">
            PK<span className="text-accent">.</span>
          </a>
          <ul className="hidden gap-6 text-sm text-[var(--muted)] sm:flex">
            {nav.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="capitalize hover:text-accent">
                  {id}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-4xl px-4">
        {/* Hero */}
        <section className="py-24 sm:py-32">
          <p className="mb-4 font-medium text-accent">Hi, I&apos;m</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl text-[var(--muted)] sm:text-2xl">
            {profile.role} · {profile.location}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-accent px-5 py-2.5 font-medium text-white hover:opacity-90"
            >
              View projects
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg border border-[var(--line)] px-5 py-2.5 font-medium hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>
        </section>

        <Section id="about" title="About">
          <p className="max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
            {profile.summary}
          </p>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group} className={card}>
                <h3 className="mb-3 font-semibold">{s.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span key={i} className={chip}>
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="space-y-10 border-l border-[var(--line)] pl-6">
            {experience.map((e) => (
              <li key={e.company} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">
                    {e.title} <span className="text-accent">@ {e.company}</span>
                  </h3>
                  <span className="text-sm text-[var(--muted)]">{e.period}</span>
                </div>
                <p className="text-sm text-[var(--muted)]">{e.location}</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[var(--muted)]">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.name}
                className={`${card} flex flex-col transition hover:-translate-y-1 hover:border-accent`}
              >
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="mb-4 text-sm text-accent">{p.tagline}</p>
                <ul className="mb-6 list-disc space-y-1.5 pl-5 text-sm text-[var(--muted)]">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className={chip}>
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education & Certifications">
          <div className="grid gap-6 md:grid-cols-2">
            <div className={card}>
              <h3 className="font-semibold">{education.school}</h3>
              <p className="text-[var(--muted)]">{education.degree}</p>
              <p className="mt-3 text-sm text-[var(--muted)]">{education.period}</p>
              <p className="mt-1 font-semibold text-accent">{education.score}</p>
            </div>
            <div className={card}>
              <h3 className="mb-3 font-semibold">Certifications</h3>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                {certifications.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="text-accent">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className={`${card} text-center`}>
            <h3 className="text-2xl font-bold">Let&apos;s work together</h3>
            <p className="mx-auto mt-2 max-w-md text-[var(--muted)]">
              I&apos;m open to software engineering roles and collaborations. Drop me a
              message!
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-lg bg-accent px-5 py-2.5 font-medium text-white hover:opacity-90"
              >
                Email me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-[var(--line)] px-5 py-2.5 font-medium hover:border-accent hover:text-accent"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-[var(--line)] px-5 py-2.5 font-medium hover:border-accent hover:text-accent"
              >
                GitHub
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-[var(--line)] py-8 text-center text-sm text-[var(--muted)]">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind CSS.
      </footer>
    </>
  );
}
