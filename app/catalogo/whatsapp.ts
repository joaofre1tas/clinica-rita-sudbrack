const phone = "5551995599459";

export function whatsappLink(message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const catalogWhatsappUrl = whatsappLink(
  "Olá! Vi o catálogo de perfumes árabes no site da Clínica Rita Sudbrack e gostaria de saber mais sobre os perfumes disponíveis.",
);

export function perfumeWhatsappUrl(name: string): string {
  return whatsappLink(
    `Olá! Vi o perfume ${name} no catálogo do site da Clínica Rita Sudbrack e gostaria de saber o valor e a disponibilidade.`,
  );
}
