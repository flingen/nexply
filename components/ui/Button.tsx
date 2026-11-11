import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "inverse" | "ghost-dark";

const styles: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-accent-ink",
  secondary: "border border-ink/25 text-ink hover:border-ink bg-transparent",
  inverse: "bg-white text-ink hover:bg-accent-bright",
  "ghost-dark": "border border-white/25 text-white hover:border-white bg-transparent",
};

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`h-3.5 w-3.5 flex-none ${className}`} aria-hidden="true">
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  arrow = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
}) {
  const cls = `group inline-flex h-[52px] items-center justify-center gap-3 rounded-full px-7 text-[15px] font-medium tracking-[-0.005em] transition-colors duration-200 ${styles[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <Arrow className="transition-transform duration-200 group-hover:translate-x-0.5" />}
    </>
  );
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
