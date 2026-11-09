import { company } from "@/data/company";
export function whatsapp(
  message = "Olá! Encontrei a Serralheria Casa Forte pelo site e gostaria de solicitar um orçamento.",
) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
