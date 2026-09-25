import Image from "next/image";
import { Check, Code2, Palette, ShieldCheck, Smartphone, Users } from "lucide-react";
import type { CSSProperties } from "react";
import { NetworkCanvas } from "@/components/NetworkCanvas";
import { ButtonLink, Container, delay } from "@/components/ui";

const words = ["solutions.", "software.", "hiring.", "testing."];

const chips = [
  { label: "Recruitment", icon: Users, className: "left-[2%] top-[10%]", d: "0s" },
  { label: "Software", icon: Code2, className: "right-[-2%] top-[22%]", d: "1.2s" },
  { label: "Mobile Apps", icon: Smartphone, className: "left-[-6%] top-[58%]", d: "2.4s" },
  { label: "Quality Assurance", icon: ShieldCheck, className: "bottom-[6%] right-[4%]", d: "0.6s" },
  { label: "Web & Hosting", icon: Palette, className: "bottom-[-2%] left-[18%]", d: "1.8s" },
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-24 pt-32">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 size-[640px] animate-aurora rounded-full bg-indigo-600/30 blur-[120px]" />
        <div
          className="absolute -right-40 top-20 size-[560px] animate-aurora rounded-full bg-cyan-500/20 blur-[120px]"
          style={{ animationDelay: "-7s" }}
        />
        <div
          className="absolute bottom-[-20%] left-1/3 size-[520px] animate-aurora rounded-full bg-fuchsia-600/20 blur-[120px]"
          style={{ animationDelay: "-13s" }}
        />
        <div className="absolute inset-0 bg-grid mask-radial" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>
      <NetworkCanvas className="-z-10 opacity-80" />

      <Container className="grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p
            data-reveal
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-2 pr-4 text-xs font-medium text-slate-300 backdrop-blur"
          >
            <span className="relative flex size-2.5">
              <span className="absolute inset-0 animate-pulse-ring rounded-full bg-cyan-400" />
              <span className="relative size-2.5 rounded-full bg-cyan-400" />
            </span>
            IT Staffing &amp; Solutions · UK &amp; India
          </p>

          <h1
            data-reveal
            style={delay(0.08)}
            className="mt-7 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
          >
            <span className="sr-only">Smart people. Smarter solutions.</span>
            <span aria-hidden="true">
              Smart people.
              <br />
              Smarter{" "}
              <span className="rotator">
                {words.map((w, i) => (
                  <span key={w} className="text-gradient pb-[0.08em]" style={{ "--i": i } as CSSProperties}>
                    {w}
                  </span>
                ))}
              </span>
            </span>
          </h1>

          <p data-reveal style={delay(0.16)} className="mt-7 max-w-xl text-lg leading-relaxed text-slate-400">
            A dedicated team of professionals with combined experience — connecting businesses with exceptional IT
            talent, and building the software, apps and quality frameworks that move them forward.
          </p>

          <div data-reveal style={delay(0.24)} className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/#contact">Hire talent</ButtonLink>
            <ButtonLink href="/careers" variant="ghost">
              Explore careers
            </ButtonLink>
          </div>

          <ul data-reveal style={delay(0.32)} className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
            {["Permanent & contract staffing", "In-house development teams", "End-to-end QA"].map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="grid size-5 place-items-center rounded-full bg-cyan-400/10 text-cyan-300">
                  <Check className="size-3" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Orbit visual */}
        <div data-reveal style={delay(0.2)} aria-hidden="true" className="hidden lg:col-span-5 lg:block">
          <div className="relative mx-auto aspect-square w-full max-w-[480px]">
            <div className="absolute inset-0 rounded-full border border-white/[0.07]" />
            <div className="absolute inset-[12%] animate-spin-slow rounded-full border border-dashed border-indigo-400/25">
              <span className="absolute left-1/2 top-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400 shadow-[0_0_16px_4px] shadow-indigo-500/60" />
            </div>
            <div className="absolute inset-[26%] animate-spin-reverse rounded-full border border-cyan-400/20">
              <span className="absolute bottom-0 left-1/2 size-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_4px] shadow-cyan-400/60" />
            </div>

            <div className="absolute inset-[36%]">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-brand opacity-50 blur-2xl" />
              <div className="glass relative grid size-full place-items-center rounded-[2rem]">
                <Image src="/images/vbc.png" alt="" width={120} height={120} className="w-3/5 invert" />
              </div>
            </div>

            {chips.map(({ label, icon: Icon, className, d }) => (
              <div key={label} className={`absolute ${className}`}>
                <div
                  className="glass flex animate-float items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white shadow-xl shadow-black/30"
                  style={{ animationDelay: d }}
                >
                  <Icon className="size-4 text-cyan-300" />
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden h-11 w-7 -translate-x-1/2 justify-center rounded-full border border-white/20 pt-2 sm:flex"
      >
        <span className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
      </a>
    </section>
  );
}
