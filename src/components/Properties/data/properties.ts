import loftImage from "../../../assets/images/LoftUrbano.jpg";
import residenceImage from "../../../assets/images/ResidencePlus.jpg";
import penthouseImage from "../../../assets/images/Penthouse.jfif";
import planoLoft from "../../../assets/images/PlanoLoftUrbano.jpg";
import planoResidence from "../../../assets/images/PlanoResidencePlus.jpg";
import planoPenthouse from "../../../assets/images/PlanoPenthouse.jpg";

export type Property = {
  id: number;
  name: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  floorPlan: string;
  floorPlanAlt: string;
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
    image: loftImage,
    floorPlan: planoLoft,
    floorPlanAlt: "Plano arquitectónico de Loft Urbano",
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
    image: residenceImage,
    floorPlan: planoResidence,
    floorPlanAlt: "Plano arquitectónico de Residence Plus",
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
    image: penthouseImage,
    floorPlan: planoPenthouse,
    floorPlanAlt: "Plano arquitectónico de Penthouse Signature",
    description:
      "Una residencia exclusiva con amplios espacios, acabados premium y una experiencia residencial de alto nivel.",
    features: [
      "Diseño exclusivo",
      "Amplias áreas interiores",
      "Acceso a amenidades",
    ],
  },
];
