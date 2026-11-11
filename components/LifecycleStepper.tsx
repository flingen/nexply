"use client";

import { useEffect, useState } from "react";
import { lifecycle } from "@/content/site";
import { tones, toneCycle } from "@/lib/tones";

const STEP_MS = 5000;

export function LifecycleStepper() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % lifecycle.length), STEP_MS);
    return () => clearTimeout(id);
  }, [active, auto]);

  const pick = (i: number) => {
    setAuto(false);
    setActive(i);
  };
  const step = lifecycle[active];
  const t = tones[toneCycle[active % 3]];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <ol className="lg:col-span-5">
        {lifecycle.map((s, i) => {
          const on = i === active;
          const tt = tones[toneCycle[i % 3]];
          return (
            <li key={s.n}>
              <button
                type="button"
                onClick={() => pick(i)}
                aria-current={on ? "step" : undefined}
                className={`group relative flex w-full items-center gap-5 overflow-hidden rounded-xl px-5 py-4 text-left transition-colors ${
                  on ? "bg-white/[0.07]" : "hover:bg-white/[0.04]"
                }`}
              >
                <span
                  className={`flex h-9 w-9 flex-none items-center justify-center rounded-full text-[13px] font-semibold tabular-nums transition-colors ${
                    on ? `${tt.bg} text-night` : "bg-white/10 text-white/70"
                  }`}
                >
                  {i + 1}
                </span>
                <span className={`serif text-[24px] leading-tight tracking-[-0.01em] ${on ? "text-white" : "text-white/60 group-hover:text-white/90"}`}>
                  {s.title}
                </span>
                {on && auto && (
                  <span
                    key={`p-${active}`}
                    className={`progress absolute bottom-0 left-0 h-[2px] w-full ${tt.bg}`}
                    style={{ animationDuration: `${STEP_MS}ms` }}
                    aria-hidden="true"
                  />
                )}
              </button>
            </li>
          );
        })}
      </ol>

      <div className="lg:col-span-7" aria-live="polite">
        <div key={active} className="fade-up rounded-2xl border border-white/10 bg-white/[0.04] p-8 md:p-12">
          <p className={`text-[14px] font-medium ${t.bright}`}>
            Stage {active + 1} of {lifecycle.length}
          </p>
          <h3 className="display mt-4 text-[clamp(2.25rem,1.6rem+2vw,3.5rem)] text-white">{step.title}</h3>
          <p className="mt-6 max-w-[44ch] text-[20px] leading-snug text-white">{step.text}</p>
          <p className="mt-4 max-w-[52ch] text-[16px] leading-relaxed text-night-muted">{step.detail}</p>
        </div>
      </div>
    </div>
  );
}
