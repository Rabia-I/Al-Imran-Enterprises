import { MessageCircle } from "lucide-react";
import { site } from "@/lib/content";

export function WhatsAppButton() {
  return (
    <a
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-industrial hover:bg-green-700"
      href={`https://wa.me/${site.whatsapp}`}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
