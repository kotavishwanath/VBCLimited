import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Briefcase, Globe2, Inbox, MapPin, Rocket, Sparkles, Wallet } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Container, SectionHeading, delay } from "@/components/ui";
import { isOpen, jobs } from "@/lib/jobs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join VBC Limited. Explore IT jobs and project leadership roles across our UK and India teams, or send us a general application.",
  alternates: { canonical: "/careers" },
};

const reasons = [
  {
    icon: Sparkles,
    title: "Smart people, real ownership",
    body: "We hire smart people so they can tell us what to do — your expertise shapes how we deliver.",
  },
  {
    icon: Globe2,
    title: "UK & India teams",
    body: "Work alongside colleagues and clients across two countries and many industries.",
  },
  {
    icon: Rocket,
    title: "Grow with us",
    body: "A vibrant, growing company where your role can grow as quickly as you do.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        kicker="Careers"
        title={
          <>
            Do the best work of <span className="text-gradient">your career.</span>
          </>
        }
        intro="Join a dedicated team of professionals delivering recruitment, software and quality engineering for clients across the UK and India."
      >
        <div className="flex flex-wrap gap-4">
          {jobs.length > 0 && <ButtonLink href="#roles">See open roles</ButtonLink>}
          <ButtonLink href="#apply" variant={jobs.length > 0 ? "ghost" : "primary"}>
            General application
          </ButtonLink>
        </div>
      </PageHero>

      <section className="py-20">
        <Container className="grid gap-4 md:grid-cols-3">
          {reasons.map((r, i) => (
            <article key={r.title} data-reveal style={delay(0.08 * i)} className="spotlight glass rounded-3xl p-8">
              <span className="grid size-12 place-items-center rounded-2xl bg-gradient-brand text-white">
                <r.icon className="size-5" />
              </span>
              <h2 className="mt-6 font-display text-xl font-semibold text-white">{r.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{r.body}</p>
            </article>
          ))}
        </Container>
      </section>

      <section id="roles" className="py-20">
        <Container>
          <SectionHeading kicker="Open roles" title="Current opportunities" />
          {jobs.length === 0 && (
            <div data-reveal className="glass mt-12 flex flex-col items-start gap-6 rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div className="flex items-center gap-5">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white/5 text-cyan-300 ring-1 ring-white/10">
                  <Inbox className="size-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">No open roles right now</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    New opportunities are posted here first. In the meantime, send us a general application.
                  </p>
                </div>
              </div>
              <ButtonLink href="#apply" variant="ghost" className="shrink-0">
                Apply anyway
              </ButtonLink>
            </div>
          )}
          <ul className="mt-12 space-y-4 empty:hidden">
            {jobs.map((job) => {
              const open = isOpen(job);
              return (
                <li key={job.slug} data-reveal>
                  <Link
                    href={`/careers/${job.slug}`}
                    className="spotlight glass group flex flex-col gap-6 rounded-3xl p-7 transition sm:p-9 lg:flex-row lg:items-center lg:justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-2xl font-semibold text-white">{job.title}</h3>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            open ? "bg-emerald-400/10 text-emerald-300" : "bg-white/5 text-slate-400"
                          }`}
                        >
                          {open ? "Hiring" : "Closed"}
                        </span>
                      </div>
                      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                        <li className="flex items-center gap-2">
                          <MapPin className="size-4 text-cyan-400" /> {job.location}
                        </li>
                        <li className="flex items-center gap-2">
                          <Briefcase className="size-4 text-cyan-400" /> {job.type}
                        </li>
                        <li className="flex items-center gap-2">
                          <Wallet className="size-4 text-cyan-400" /> {job.salary}
                        </li>
                      </ul>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                      View role
                      <span className="grid size-10 place-items-center rounded-full border border-white/15 transition group-hover:border-cyan-400/60 group-hover:bg-cyan-400/10">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          {jobs.length > 0 && (
            <p data-reveal className="mt-8 text-sm text-slate-500">
              Don’t see the right role? We’re always happy to hear from talented people — send a general application
              below.
            </p>
          )}
        </Container>
      </section>

      <section id="apply" className="py-20 pb-32">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              kicker="General application"
              title={
                <>
                  Tell us about <span className="text-gradient">yourself.</span>
                </>
              }
              intro={
                <>
                  Share your experience and a link to your CV or LinkedIn profile. You can also email your CV directly
                  to{" "}
                  <a href={`mailto:${site.email}`} className="text-cyan-300 underline-offset-4 hover:underline">
                    {site.email}
                  </a>
                  .
                </>
              }
            />
          </div>
          <div data-reveal className="lg:col-span-7">
            <div className="rounded-[2rem] bg-gradient-to-br from-cyan-400/40 via-indigo-500/20 to-fuchsia-500/30 p-px">
              <div className="rounded-[calc(2rem-1px)] bg-ink-900/95 p-7 sm:p-10">
                <ContactForm
                  defaultSubject="General application"
                  submitLabel="Submit application"
                  messagePlaceholder="Your experience, the kind of role you’re looking for, and a link to your CV…"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
