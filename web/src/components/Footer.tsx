import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, services, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-ink-950">
      <div className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-80 max-w-4xl rounded-full bg-indigo-600/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pt-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <Image src="/images/vbc.png" alt="" width={32} height={32} className="invert" />
              </span>
              <span className="font-display text-xl font-semibold text-white">VBC Limited</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              IT staffing, recruitment and technology solutions across the UK &amp; India — built on people,
              process and long-term partnerships.
            </p>
            <Link
              href="/#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition hover:border-cyan-400/50 hover:bg-white/5"
            >
              Start a conversation
              <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Company</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-slate-300 transition hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/#contact" className="text-slate-300 transition hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Services</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {services.map((s) => (
                  <li key={s.title}>
                    <Link href="/#services" className="text-slate-300 transition hover:text-white">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Reach us</h3>
              <ul className="mt-5 space-y-4 text-sm text-slate-300">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-cyan-400" />
                  <a href={site.mapHref} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {site.address.join(", ")}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-cyan-400" />
                  <a href={site.phoneHref} className="hover:text-white">
                    {site.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-cyan-400" />
                  <a href={`mailto:${site.email}`} className="hover:text-white">
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mt-20 select-none text-center font-display text-[22vw] font-bold leading-[0.8] tracking-tighter text-transparent lg:text-[16rem]"
          style={{ WebkitTextStroke: "1px rgb(255 255 255 / 0.08)" }}
        >
          VBC
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/5 py-8 text-xs text-slate-500 sm:flex-row">
          <p>
            © {site.since}–{year} {site.legalName}. All rights reserved.
          </p>
          <p>Bedford, United Kingdom</p>
        </div>
      </div>
    </footer>
  );
}
