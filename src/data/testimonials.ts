export type Testimonial = {
  name: string;
  text: string;
  rating?: number;
  project?: string;
};
// Adicione apenas depoimentos reais autorizados. Se vazio, a seção fica oculta.
export const testimonials: Testimonial[] = [];
