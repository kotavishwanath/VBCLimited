import type { CSSProperties } from "react";
import { Container, Kicker, delay } from "@/components/ui";
import { tafFeatures } from "@/lib/site";

const pipeline = [
  { step: "Tag", width: "w-full" },
  { step: "Integrate", width: "w-[88%]" },
  { step: "Execute", width: "w-[72%]" },
  { step: "Report", width: "w-[94%]" },
];

export function Automation() {
  return (
    <section id="automation" className="relative overflow-clip py-28 sm:py-36">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 size-[900px] -translate-x-1/2 rounded-full bg-indigo-700/15 blur-[140px]" />
        <div className="absolute inset-0 bg-grid opacity-50 mask-radial" />
      </div>

      <Container className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <div data-reveal>
              <Kicker>Test Automation Framework</Kicker>
            </div>
            <h2
              data-reveal
              style={delay(0.08)}
              className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl"
            >
              Ship faster with <span className="text-gradient">confidence.</span>
            </h2>
            <p data-reveal style={delay(0.16)} className="mt-5 text-lg leading-relaxed text-slate-400">
              TAF’s support for extensibility, service virtualisation, portability, forward integration and
              just-in-time reporting adds up to more than 50% overall cost savings across automation design,
              execution cycles and maintenance.
            </p>

            <div data-reveal style={delay(0.24)} className="glass mt-10 overflow-hidden rounded-3xl">
              <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3">
                <span className="size-2.5 rounded-full bg-rose-400/70" />
                <span className="size-2.5 rounded-full bg-amber-400/70" />
                <span className="size-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-3 font-mono text-xs text-slate-500">taf · release-pipeline</span>
              </div>
              <div className="space-y-4 p-6">
                {pipeline.map((p, i) => (
                  <div key={p.step}>
                    <div className="mb-1.5 flex justify-between font-mono text-xs">
                      <span className="text-slate-300">{p.step}</span>
                      <span className="text-emerald-400">✓ passed</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <div
                        className={`bar h-full rounded-full bg-gradient-brand ${p.width}`}
                        style={{ "--bd": `${0.4 + 0.25 * i}s` } as CSSProperties}
                      />
                    </div>
                  </div>
                ))}
                <div className="flex items-end justify-between border-t border-white/5 pt-5">
                  <span className="text-sm text-slate-400">Overall cost savings</span>
                  <span className="font-display text-4xl font-semibold text-white">
                    <span className="text-gradient">50%+</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {tafFeatures.map((f, i) => (
            <article
              key={f.title}
              data-reveal
              style={delay(0.05 * (i % 2))}
              className="spotlight glass group rounded-3xl p-7"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-white/5 text-indigo-300 ring-1 ring-white/10 transition group-hover:text-cyan-300">
                  <f.icon className="size-5" />
                </span>
                <span className="font-mono text-xs text-slate-600">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
