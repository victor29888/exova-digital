interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-medium tracking-wide text-zinc-300 uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_18px_rgba(129,140,248,0.9)]" />
      {children}
    </span>
  );
}
