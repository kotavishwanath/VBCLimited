import type { ReactNode } from "react";
import { Container, Kicker, delay } from "@/components/ui";

export function PageHero({ kicker, title, intro, children }: { kicker: string; title: ReactNode; intro?: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-40 sm:pt-48">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-32 size-[520px] animate-aurora rounded-full bg-indigo-600/25 blur-[120px]" />
        <div className="absolute -right-32 top-0 size-[460px] animate-aurora rounded-full bg-cyan-500/15 blur-[120px]" style={{ animationDelay: "-8s" }} />
        <div className="absolute inset-0 bg-grid mask-radial" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>
      <Container>
        <div data-reveal>
          <Kicker>{kicker}</Kicker>
        </div>
        <h1
          data-reveal
          style={delay(0.08)}
          className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {title}
        </h1>
        {intro && (
          <p data-reveal style={delay(0.16)} className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            {intro}
          </p>
        )}
        {children && (
          <div data-reveal style={delay(0.24)} className="mt-10">
            {children}
          </div>
        )}
      </Container>
    </section>
  );
}
