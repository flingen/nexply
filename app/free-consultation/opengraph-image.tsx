import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Book a free consultation with Nexply";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg("consult");
}
