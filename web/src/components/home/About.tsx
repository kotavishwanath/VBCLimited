import { Award, Globe2, Handshake, Layers, Target } from "lucide-react";
import { Container, SectionHeading, delay } from "@/components/ui";
import { pillars, stats } from "@/lib/site";

const pillarIcons = [Layers, Award, Target, Handshake];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              kicker="About us"
              title={
                <>
                  A vibrant, growing company built on <span className="text-gradient">people and process.</span>
                </>
              }
            />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-400">
              <p data-reveal style={delay(0.2)}>
                VBC is a leader in IT services and solutions, and over the years has become a trusted name in
                recruitment consulting — the reckoning service provider for staffing for our valued clients, with a
                nationwide footprint and employees throughout the country.
              </p>
              <p data-reveal style={delay(0.26)}>
                We deliver business value through process excellence, a quality framework, service delivery and
                innovation — combining technological skills, domain expertise, process focus and a commitment to
                long-term client relationships.
              </p>
            </div>

            <div data-reveal style={delay(0.32)} className="glass mt-10 flex items-center gap-5 rounded-3xl p-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-white">
                <Globe2 className="size-6" />
              </span>
              <div className="flex flex-1 flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-display text-lg font-semibold text-white">United Kingdom &amp; India</p>
                  <p className="text-sm text-slate-400">London-established · Bedford headquartered</p>
                </div>
                <div className="flex gap-2 text-xs font-semibold">
                  <span className="rounded-full border border-white/10 px-3 py-1 text-slate-300">UK</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-slate-300">IN</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 self-center sm:grid-cols-2">
            {pillars.map((p, i) => {
              const Icon = pillarIcons[i];
              return (
                <article
                  key={p.title}
                  data-reveal
                  style={delay(0.08 * i)}
                  className={`spotlight glass rounded-3xl p-7 ${i % 2 === 1 ? "sm:translate-y-10" : ""}`}
                >
                  <span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.body}</p>
                </article>
              );
            })}
          </div>
        </div>

        <dl className="mt-28 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} data-reveal style={delay(0.06 * i)} className="bg-ink-950 p-8">
              <dt className="text-sm font-medium text-slate-300">{s.label}</dt>
              <dd className="mt-3 font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                <span className="text-gradient" data-count={s.value} data-suffix={s.suffix}>
                  {s.value}
                  {s.suffix}
                </span>
              </dd>
              <dd className="mt-2 text-sm text-slate-500">{s.detail}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
