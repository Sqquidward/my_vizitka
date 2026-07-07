interface SectionHeadingProps {
  id: string;
  label: string;
  title?: string;
}

export function SectionHeading({ id, label, title }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center gap-3">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan/60">
          {label}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-cyan/20 to-transparent" />
      </div>
      {title && (
        <h2 id={id} className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h2>
      )}
      {!title && (
        <h2 id={id} className="sr-only">
          {label}
        </h2>
      )}
    </div>
  );
}
