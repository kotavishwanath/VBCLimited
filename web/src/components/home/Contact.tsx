import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Container, SectionHeading, delay } from "@/components/ui";
import { site } from "@/lib/site";

const channels = [
  { icon: Mail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref },
  { icon: MapPin, label: "Visit us", value: site.address.join(", "), href: site.mapHref, external: true },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <div aria-hidden="true" className="absolute bottom-0 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      <Container className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            kicker="Contact"
            title={
              <>
                Let’s build your <span className="text-gradient">next team.</span>
              </>
            }
            intro="Looking to hire, planning a project, or interested in working with us? Send a message and our team will get back to you."
          />

          <ul className="mt-10 space-y-3">
            {channels.map((c, i) => (
              <li key={c.label} data-reveal style={delay(0.08 * i)}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="spotlight glass group flex items-center gap-5 rounded-2xl p-5 transition"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/5 text-cyan-300 ring-1 ring-white/10">
                    <c.icon className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-medium uppercase tracking-[0.2em] text-slate-500">{c.label}</span>
                    <span className="mt-1 block font-medium text-white">{c.value}</span>
                  </span>
                  <ArrowUpRight className="size-5 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal style={delay(0.1)} className="lg:col-span-7">
          <div className="relative rounded-[2rem] bg-gradient-to-br from-cyan-400/40 via-indigo-500/20 to-fuchsia-500/30 p-px">
            <div className="rounded-[calc(2rem-1px)] bg-ink-900/95 p-7 backdrop-blur-xl sm:p-10">
              <h3 className="font-display text-2xl font-semibold text-white">Send us a message</h3>
              <p className="mt-2 text-sm text-slate-400">All fields are required. We’ll reply to the email you provide.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
