import { Briefcase, Dumbbell, ShieldCheck, Sun, Trees, Waves } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Amenity = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const amenities: Amenity[] = [
  {
    id: 1,
    title: "Alberca Infinity",
    description: "Disfruta de vistas panorámicas.",
    icon: Waves,
  },
  {
    id: 2,
    title: "Gimnasio",
    description: "Equipamiento de última generación.",
    icon: Dumbbell,
  },
  {
    id: 3,
    title: "Coworking",
    description: "Espacios ideales para trabajar.",
    icon: Briefcase,
  },
  {
    id: 4,
    title: "Áreas verdes",
    description: "Jardines y zonas de descanso.",
    icon: Trees,
  },
  {
    id: 5,
    title: "Roof Garden",
    description: "Terraza con vistas espectaculares.",
    icon: Sun,
  },
  {
    id: 6,
    title: "Seguridad 24/7",
    description: "Acceso controlado y vigilancia.",
    icon: ShieldCheck,
  },
];
