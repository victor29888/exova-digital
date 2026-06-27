import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_18px_48px_rgba(255,255,255,0.12)] hover:bg-zinc-100 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.45),0_24px_64px_rgba(255,255,255,0.16)]",
  secondary:
    "border border-white/10 bg-white/[0.04] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-white/20 hover:bg-white/[0.075]",
  ghost: "text-zinc-400 hover:bg-white/[0.04] hover:text-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
