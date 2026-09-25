import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { Container, SectionHeading, delay } from "@/components/ui";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[700px] bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgb(49_46_129/0.35),transparent)]" />
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            kicker="What we do"
            title={
              <>
                Six ways we help you <span className="text-gradient">build and scale.</span>
              </>
            }
            intro="From finding the right people to shipping and assuring the software they build — one partner, end to end."
          />
          <Link
            data-reveal
            href="/#contact"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white"
          >
            Discuss your requirements
            <span className="grid size-9 place-items-center rounded-full border border-white/15 transition group-hover:border-cyan-400/60 group-hover:bg-cyan-400/10">
              <ArrowUpRight className="size-4" />
            </span>
          </Link>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              data-reveal
              style={delay(0.06 * (i % 3))}
              className={`spotlight group glass flex flex-col overflow-hidden rounded-3xl p-7 sm:p-8 ${
                s.wide ? "lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-14 lg:p-10" : ""
              } ${s.className}`}
            >
              <div className={`flex flex-col ${s.items && !s.wide ? "" : "flex-1"}`}>
                <div className="flex items-start justify-between">
                  <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 text-cyan-200 ring-1 ring-white/10 transition duration-500 group-hover:rotate-[-6deg] group-hover:scale-110">
                    <s.icon className="size-6" />
                  </span>
                  <span className="font-display text-sm text-slate-500">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-7 text-balance font-display text-2xl font-semibold tracking-tight text-white">{s.title}</h3>
                {s.body && <p className="mt-3 max-w-2xl leading-relaxed text-slate-400">{s.body}</p>}
                {s.tags && (
                  <ul className="mt-auto flex flex-wrap gap-2 pt-7">
                    {s.tags.map((t) => (
                      <li key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-slate-300">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
                {s.link && (
                  <Link
                    href={s.link.href}
                    className="mt-auto hidden items-center gap-3 pt-8 text-sm font-semibold text-white lg:inline-flex"
                  >
                    <span className="grid size-9 place-items-center rounded-full bg-gradient-brand transition group-hover:scale-110">
                      <ArrowUpRight className="size-4" />
                    </span>
                    {s.link.label}
                  </Link>
                )}
              </div>

              {s.items && (
                <ul
                  className={
                    s.wide
                      ? "mt-7 grid gap-2.5 sm:grid-cols-2 lg:mt-0 lg:content-center"
                      : "mt-5 space-y-2.5"
                  }
                >
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className={`flex gap-3 text-sm text-slate-300 ${
                        s.wide ? "items-center rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3" : ""
                      }`}
                    >
                      <Check className={`size-4 shrink-0 text-cyan-400 ${s.wide ? "" : "mt-0.5"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {s.link && (
                <Link
                  href={s.link.href}
                  className="mt-7 flex items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm font-semibold text-white lg:hidden"
                >
                  {s.link.label}
                  <span className="grid size-9 place-items-center rounded-full bg-gradient-brand">
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
