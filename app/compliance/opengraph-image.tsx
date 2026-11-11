import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Nexply Compliance practice";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg("compliance");
}
