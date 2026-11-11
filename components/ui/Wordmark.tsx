import Image from "next/image";
import { site } from "@/content/site";
export function Wordmark({ tone = "light", size = "md" }: { tone?: "light" | "dark"; size?: "md" | "lg" }) {
  const shield = size === "lg" ? 40 : 34;
  const name = size === "lg" ? "text-[30px]" : "text-[25px]";
  const tag = size === "lg" ? "text-[11px]" : "text-[9.5px]";
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/nexply-shield.png"
        alt=""
        width={Math.round((shield * 322) / 387)}
        height={shield}
        priority
      />
      <span className="flex flex-col leading-none">
        <span
          className={`${name} font-bold tracking-[-0.045em] ${tone === "dark" ? "text-white" : "text-ink"}`}
        >
          Nexply
        </span>
        <span
          className={`${tag} mt-[5px] font-medium uppercase tracking-[0.2em] ${
            tone === "dark" ? "text-night-muted" : "text-muted"
          }`}
        >
          {site.tagline}
        </span>
      </span>
      <span className="sr-only">Nexply, {site.tagline}</span>
    </span>
  );
}
