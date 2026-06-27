interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium tracking-wide text-zinc-400 uppercase">
      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
      {children}
    </span>
  );
}
