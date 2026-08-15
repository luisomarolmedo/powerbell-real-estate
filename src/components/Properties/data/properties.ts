export type Property = {
  id: number;
  name: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  description: string;
  features: string[];
};

export const properties: Property[] = [
  {
    id: 1,
    name: "Loft Urbano",
    price: "$4.2 MDP",
    bedrooms: 2,
    bathrooms: 2,
    area: "85 m²",
    description:
      "Departamento moderno y funcional, ideal para quienes buscan comodidad, diseño y una ubicación privilegiada.",
    features: ["Acabados premium", "Espacios funcionales", "Acceso a amenidades"],
  },
  {
    id: 2,
    name: "Residence Plus",
    price: "$5.1 MDP",
    bedrooms: 3,
    bathrooms: 2,
    area: "112 m²",
    description:
      "Un departamento amplio y contemporáneo diseñado para ofrecer mayor comodidad y espacios ideales para toda la familia.",
    features: ["Espacios amplios", "Acabados premium", "Acceso a amenidades"],
  },
  {
    id: 3,
    name: "Penthouse Signature",
    price: "$8.4 MDP",
    bedrooms: 4,
    bathrooms: 3,
    area: "180 m²",
    description:
      "Una residencia exclusiva con amplios espacios, acabados premium y una experiencia residencial de alto nivel.",
    features: [
      "Diseño exclusivo",
      "Amplias áreas interiores",
      "Acceso a amenidades",
    ],
  },
];
