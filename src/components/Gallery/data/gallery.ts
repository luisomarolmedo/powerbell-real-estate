import TerranovaMain from "../../../assets/images/TerranovaMain.jpg";
import AlbercaInfinity from "../../../assets/images/AlbercaInfinity.png";
import LoftUrbano from "../../../assets/images/LoftUrbano.jpg";
import RoofGarden from "../../../assets/images/RoofGarden.jpg";
import Penthouse from "../../../assets/images/Penthouse.jfif";
import Coworking from "../../../assets/images/Coworking.jpg";
import AreasVerdes from "../../../assets/images/AreasVerdes.jpg";
import ResidencePlus from "../../../assets/images/ResidencePlus.jpg";

export type GalleryItem = {
  id: number;
  title: string;
  alt: string;
  image: string;
};

export const gallery: GalleryItem[] = [
  {
    id: 1,
    title: "Terranova",
    alt: "Vista principal del desarrollo residencial Terranova con sus áreas comunes",
    image: TerranovaMain,
  },
  {
    id: 2,
    title: "Alberca Infinity",
    alt: "Alberca infinity rodeada de terrazas con vista panorámica",
    image: AlbercaInfinity,
  },
  {
    id: 3,
    title: "Loft Urbano",
    alt: "Interior de loft urbano con diseño moderno y amplios ventanales",
    image: LoftUrbano,
  },
  {
    id: 4,
    title: "Roof Garden",
    alt: "Roof garden con áreas de descanso y vegetación al aire libre",
    image: RoofGarden,
  },
  {
    id: 5,
    title: "Penthouse",
    alt: "Penthouse con terraza privada y vista a la ciudad",
    image: Penthouse,
  },
  {
    id: 6,
    title: "Coworking",
    alt: "Espacio de coworking con mobiliario contemporáneo",
    image: Coworking,
  },
  {
    id: 7,
    title: "Áreas Verdes",
    alt: "Jardines y áreas verdes comunes del desarrollo",
    image: AreasVerdes,
  },
  {
    id: 8,
    title: "Residence Plus",
    alt: "Residence Plus con acabados de lujo en sus áreas residenciales",
    image: ResidencePlus,
  },
];
