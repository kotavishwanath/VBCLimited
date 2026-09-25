import Link from "next/link";
import type { ComponentProps, CSSProperties, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
      <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent" />
      {children}
    </span>
  );
}

export function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
}: {
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div data-reveal>
        <Kicker>{kicker}</Kicker>
      </div>
      <h2
        data-reveal
        style={delay(0.08)}
        className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl"
      >
        {title}
      </h2>
      {intro && (
        <p data-reveal style={delay(0.16)} className="mt-5 text-lg leading-relaxed text-slate-400">
          {intro}
        </p>
      )}
    </div>
  );
}

type ButtonProps = ComponentProps<typeof Link> & { variant?: "primary" | "ghost"; arrow?: boolean };

export function ButtonLink({ variant = "primary", arrow = true, className = "", children, ...props }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-gradient-brand text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
      : "border border-white/15 bg-white/[0.03] text-white backdrop-blur hover:border-white/30 hover:bg-white/[0.07]";
  return (
    <Link
      {...props}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold transition ${styles} ${className}`}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
      <span className="relative">{children}</span>
      {arrow && <ArrowRight className="relative size-4 transition group-hover:translate-x-1" />}
    </Link>
  );
}

export const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;
