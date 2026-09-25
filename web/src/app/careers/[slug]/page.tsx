import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Briefcase, CalendarDays, CalendarX2, Check, MapPin, Users, Wallet } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { ButtonLink, Container, Kicker, delay } from "@/components/ui";
import { formatDate, getJob, isOpen, jobs } from "@/lib/jobs";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/careers/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return {};
  return {
    title: `${job.title} — Careers`,
    description: job.summary,
    alternates: { canonical: `/careers/${job.slug}` },
  };
}

export default async function JobPage({ params }: PageProps<"/careers/[slug]">) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();
  const open = isOpen(job);

  const details = [
    { icon: MapPin, label: "Location", value: job.location },
    { icon: Briefcase, label: "Job type", value: job.type },
    { icon: Wallet, label: "Salary", value: job.salary },
    { icon: Users, label: "Vacancies", value: String(job.vacancies) },
    { icon: CalendarDays, label: "Posted", value: formatDate(job.datePosted) },
    { icon: CalendarX2, label: "Closing date", value: formatDate(job.closingDate) },
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden pb-16 pt-36 sm:pt-44">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute -left-32 -top-32 size-[520px] rounded-full bg-indigo-600/25 blur-[120px]" />
          <div className="absolute inset-0 bg-grid mask-radial" />
        </div>
        <Container>
          <Link href="/careers#roles" className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">
            <ArrowLeft className="size-4" /> All roles
          </Link>
          <div data-reveal className="mt-8 flex flex-wrap items-center gap-3">
            <Kicker>{site.legalName}</Kicker>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                open ? "bg-emerald-400/10 text-emerald-300" : "bg-white/5 text-slate-400"
              }`}
            >
              {open ? "Accepting applications" : "Applications closed"}
            </span>
          </div>
          <h1
            data-reveal
            style={delay(0.08)}
            className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl"
          >
            {job.title}
          </h1>
          <p data-reveal style={delay(0.16)} className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            {job.summary}
          </p>
        </Container>
      </section>

      <section className="pb-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-14 lg:col-span-8">
            <JobList title="Responsibilities" items={job.responsibilities} />
            <JobList title="Skills & experience" items={job.requirements} />
          </div>

          <aside className="lg:col-span-4">
            <div className="glass rounded-3xl p-7 lg:sticky lg:top-28">
              <h2 className="font-display text-lg font-semibold text-white">Role details</h2>
              <dl className="mt-6 space-y-4">
                {details.map((d) => (
                  <div key={d.label} className="flex gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/5 text-cyan-300 ring-1 ring-white/10">
                      <d.icon className="size-4" />
                    </span>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.18em] text-slate-500">{d.label}</dt>
                      <dd className="mt-0.5 text-sm font-medium text-white">{d.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <ButtonLink href="#apply" className="mt-8 w-full">
                {open ? "Apply now" : "Register interest"}
              </ButtonLink>
            </div>
          </aside>
        </Container>
      </section>

      <section id="apply" className="pb-32">
        <Container>
          <div data-reveal className="mx-auto max-w-3xl rounded-[2rem] bg-gradient-to-br from-cyan-400/40 via-indigo-500/20 to-fuchsia-500/30 p-px">
            <div className="rounded-[calc(2rem-1px)] bg-ink-900/95 p-7 sm:p-10">
              <h2 className="font-display text-3xl font-semibold text-white">
                {open ? "Apply for this role" : "Register your interest"}
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                {open
                  ? "Tell us about your experience and include a link to your CV or LinkedIn profile."
                  : "This role is no longer accepting applications, but we’d love to hear from you for similar opportunities."}{" "}
                You can also email your CV to{" "}
                <a href={`mailto:${site.email}`} className="text-cyan-300 underline-offset-4 hover:underline">
                  {site.email}
                </a>
                .
              </p>
              <div className="mt-8">
                <ContactForm
                  defaultSubject={`${open ? "Application" : "Interest"}: ${job.title}`}
                  submitLabel={open ? "Submit application" : "Send"}
                  messagePlaceholder="Your experience, notice period, and a link to your CV…"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function JobList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 data-reveal className="font-display text-2xl font-semibold text-white">
        {title}
      </h2>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} data-reveal className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-slate-300">
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-cyan-400/10 text-cyan-300">
              <Check className="size-3" />
            </span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
