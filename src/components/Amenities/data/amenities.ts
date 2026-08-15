import { Briefcase, Dumbbell, ShieldCheck, Sun, Trees, Waves } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Amenity = {
  id: number;
  title: string;
  description: string;
  modalDescription: string;
  details: string[];
  icon: LucideIcon;
};

export const amenities: Amenity[] = [
  {
    id: 1,
    title: "Alberca Infinity",
    description: "Disfruta de vistas panorámicas.",
    modalDescription:
      "Alberca infinity de uso exclusivo para residentes, ideal para relajarte y disfrutar de las vistas.",
    details: [
      "Área de descanso",
      "Vistas panorámicas",
      "Uso exclusivo para residentes",
    ],
    icon: Waves,
  },
  {
    id: 2,
    title: "Gimnasio",
    description: "Equipamiento de última generación.",
    modalDescription:
      "Espacio equipado para mantener tu rutina de entrenamiento sin salir de casa.",
    details: [
      "Equipamiento moderno",
      "Área de entrenamiento",
      "Acceso para residentes",
    ],
    icon: Dumbbell,
  },
  {
    id: 3,
    title: "Coworking",
    description: "Espacios ideales para trabajar.",
    modalDescription:
      "Un espacio cómodo y funcional para trabajar, estudiar o tener reuniones.",
    details: [
      "Espacios de trabajo",
      "Ambiente tranquilo",
      "Área para reuniones",
    ],
    icon: Briefcase,
  },
  {
    id: 4,
    title: "Áreas verdes",
    description: "Jardines y zonas de descanso.",
    modalDescription:
      "Jardines y zonas de descanso pensadas para disfrutar del aire libre.",
    details: ["Jardines", "Áreas de descanso", "Espacios al aire libre"],
    icon: Trees,
  },
  {
    id: 5,
    title: "Roof Garden",
    description: "Terraza con vistas espectaculares.",
    modalDescription:
      "Terraza equipada para convivir, relajarte y disfrutar de vistas espectaculares.",
    details: ["Terraza", "Áreas sociales", "Vistas panorámicas"],
    icon: Sun,
  },
  {
    id: 6,
    title: "Seguridad 24/7",
    description: "Acceso controlado y vigilancia.",
    modalDescription:
      "Acceso controlado y vigilancia continua para brindarte mayor tranquilidad.",
    details: ["Acceso controlado", "Vigilancia 24/7", "Atención continua"],
    icon: ShieldCheck,
  },
];
