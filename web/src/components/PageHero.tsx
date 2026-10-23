import type { ReactNode } from "react";
import { Container, Kicker, delay } from "@/components/ui";

export function PageHero({ kicker, title, intro, children }: { kicker: string; title: ReactNode; intro?: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-40 sm:pt-48">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="glow absolute -left-52 -top-52 size-[720px] rounded-full [--glow:rgb(79_70_229/0.25)] md:animate-aurora" />
        <div className="glow absolute -right-48 -top-16 size-[640px] rounded-full [--glow:rgb(6_182_212/0.15)] md:animate-aurora" style={{ animationDelay: "-8s" }} />
        <div className="absolute inset-0 bg-grid mask-radial" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>
      <Container>
        <div className="hero-in">
          <Kicker>{kicker}</Kicker>
        </div>
        <h1
          style={delay(0.06)}
          className="hero-in mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {title}
        </h1>
        {intro && (
          <p style={delay(0.12)} className="hero-in mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            {intro}
          </p>
        )}
        {children && (
          <div style={delay(0.18)} className="hero-in mt-10">
            {children}
          </div>
        )}
      </Container>
    </section>
  );
}
