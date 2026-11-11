import type { Tone } from "@/content/site";

export const tones: Record<
  Tone,
  { hex: string; text: string; bg: string; soft: string; border: string; glow: string; bright: string; line: string; hoverBorder: string; borderTop: string; hoverSoft: string }
> = {
  blue: {
    hex: "#008eff",
    text: "text-accent-ink",
    bg: "bg-accent",
    soft: "bg-accent-soft",
    border: "border-accent",
    glow: "glow-blue",
    bright: "text-accent-bright",
    line: "#008eff",
    hoverBorder: "hover:border-accent",
    hoverSoft: "hover:bg-accent-soft",
    borderTop: "border-t-accent",
  },
  teal: {
    hex: "#0fb5a6",
    text: "text-teal-ink",
    bg: "bg-teal",
    soft: "bg-teal-soft",
    border: "border-teal",
    glow: "glow-teal",
    bright: "text-teal-bright",
    line: "#0fb5a6",
    hoverBorder: "hover:border-teal",
    hoverSoft: "hover:bg-teal-soft",
    borderTop: "border-t-teal",
  },
  gold: {
    hex: "#d4a72c",
    text: "text-gold-ink",
    bg: "bg-gold",
    soft: "bg-gold-soft",
    border: "border-gold",
    glow: "glow-gold",
    bright: "text-gold-bright",
    line: "#d4a72c",
    hoverBorder: "hover:border-gold",
    hoverSoft: "hover:bg-gold-soft",
    borderTop: "border-t-gold",
  },
};

export const toneCycle: Tone[] = ["blue", "teal", "gold"];
