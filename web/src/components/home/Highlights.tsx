import Image from "next/image";
import { Quote as QuoteIcon } from "lucide-react";
import { ButtonLink, Container } from "@/components/ui";

export function Quote() {
  return (
    <section className="relative py-28 sm:py-36">
      <Container>
        <figure data-reveal className="relative mx-auto max-w-5xl text-center">
          <QuoteIcon aria-hidden="true" className="mx-auto size-12 text-indigo-400/60" />
          <blockquote className="mt-8 font-display text-3xl font-medium leading-[1.25] tracking-tight text-white sm:text-4xl lg:text-5xl">
            It doesn’t make sense to hire smart people and then tell them what to do;{" "}
            <span className="text-gradient">we hire smart people so they can tell us what to do.</span>
          </blockquote>
          <figcaption className="mt-8 text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
            — Steve Jobs
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}

export function CareersCta() {
  return (
    <section className="relative pb-28 sm:pb-36">
      <Container>
        <div data-reveal className="relative isolate overflow-hidden rounded-[2.5rem] border border-white/10 px-8 py-20 sm:px-16">
          <Image
            src="/images/cta-banner.jpg"
            alt=""
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="-z-20 object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/85 to-indigo-950/60" />
          <div className="absolute -right-20 -top-20 -z-10 size-96 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Careers at VBC</p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Smart people make the difference. <span className="text-gradient">Be one of them.</span>
            </h2>
            <p className="mt-5 text-lg text-slate-300">
              We’re always looking for talented engineers, project leaders and consultants to join our growing teams
              in the UK and India.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/careers">Explore careers</ButtonLink>
              <ButtonLink href="/careers#apply" variant="ghost">
                Send your CV
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
