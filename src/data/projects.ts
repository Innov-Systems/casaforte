export const categories = [
  "Todos",
  "Portões",
  "Grades",
  "Estruturas",
  "Coberturas",
  "Outros",
] as const;
export type Category = (typeof categories)[number];
export type Project = {
  id: string;
  title: string;
  category: Exclude<Category, "Todos">;
  description: string;
  coverImage: string;
  images: string[];
  location?: string;
  featured: boolean;
  alt: string;
  demo: boolean;
};
// Demonstrações gráficas, NÃO são obras da empresa. Substitua por fotos autorizadas
// em public/images/projects/, atualize alt e description e remova demo somente após validação.
export const projects: Project[] = [
  {
    id: "01",
    title: "Linhas que protegem",
    category: "Portões",
    description:
      "Referência visual de portão com linhas verticais. Conteúdo demonstrativo.",
    coverImage: "/images/projects/gate.svg",
    images: ["/images/projects/gate.svg"],
    featured: true,
    alt: "Ilustração demonstrativa de um portão metálico vertical",
    demo: true,
  },
  {
    id: "02",
    title: "Estrutura e amplitude",
    category: "Estruturas",
    description: "Estudo visual de estrutura metálica. Conteúdo demonstrativo.",
    coverImage: "/images/projects/structure.svg",
    images: ["/images/projects/structure.svg"],
    featured: true,
    alt: "Ilustração demonstrativa de vigas metálicas",
    demo: true,
  },
  {
    id: "03",
    title: "Proteção com leveza",
    category: "Coberturas",
    description:
      "Referência ilustrativa de cobertura metálica. Conteúdo demonstrativo.",
    coverImage: "/images/projects/roof.svg",
    images: ["/images/projects/roof.svg"],
    featured: false,
    alt: "Ilustração demonstrativa de cobertura metálica",
    demo: true,
  },
  {
    id: "04",
    title: "Precisão em cada linha",
    category: "Grades",
    description: "Referência visual de grade metálica. Conteúdo demonstrativo.",
    coverImage: "/images/projects/grid.svg",
    images: ["/images/projects/grid.svg"],
    featured: false,
    alt: "Ilustração demonstrativa de grade metálica",
    demo: true,
  },
];
