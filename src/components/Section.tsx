export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <h2 className="mb-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-accent">
        {title}
        <span className="h-px flex-1 bg-[var(--line)]" />
      </h2>
      {children}
    </section>
  );
}
