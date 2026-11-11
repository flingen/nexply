import { contact } from "@/content/site";
export function whatsappLink(text: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
