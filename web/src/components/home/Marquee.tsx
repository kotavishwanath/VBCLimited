import { Sparkle } from "lucide-react";
import { capabilities } from "@/lib/site";

export function Marquee() {
  return (
    <div className="relative border-y border-white/5 bg-white/[0.015] py-6" aria-label="Our capabilities">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1 || undefined} className="flex shrink-0 items-center">
              {capabilities.map((cap) => (
                <li
                  key={cap}
                  className="flex items-center gap-3 px-6 font-display text-lg font-medium whitespace-nowrap text-slate-400 sm:text-xl"
                >
                  <Sparkle className="size-4 text-indigo-400" />
                  {cap}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
