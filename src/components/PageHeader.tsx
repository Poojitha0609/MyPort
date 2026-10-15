export default function PageHeader({
  emoji,
  title,
  subtitle,
  bg,
}: {
  emoji: string;
  title: string;
  subtitle: string;
  bg: string;
}) {
  return (
    <div className="animate-pop mb-12 flex flex-wrap items-center gap-5">
      <span
        className={`brutal grid h-16 w-16 shrink-0 -rotate-6 place-items-center text-3xl hover:animate-wiggle ${bg}`}
      >
        {emoji}
      </span>
      <div>
        <h1 className="text-4xl font-bold uppercase tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-1 font-mono text-sm text-dim sm:text-base">{subtitle}</p>
      </div>
    </div>
  );
}
