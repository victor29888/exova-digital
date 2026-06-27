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
    "bg-white text-zinc-950 hover:bg-zinc-200 shadow-[0_0_24px_rgba(255,255,255,0.08)]",
  secondary:
    "border border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.06] hover:border-white/20",
  ghost: "text-zinc-400 hover:text-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${variants[variant]} ${className}`;

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
