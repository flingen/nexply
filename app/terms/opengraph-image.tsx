import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Nexply Terms of Service";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg("terms");
}
