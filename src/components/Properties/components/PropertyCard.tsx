import { Bath, BedDouble, Ruler } from "lucide-react";
import heroImage from "../../../assets/images/hero.png";
import Button from "../../shared/Button";
import Card from "../../shared/Card";

type PropertyCardProps = {
  name: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
};

function PropertyCard({
  name,
  price,
  bedrooms,
  bathrooms,
  area,
}: PropertyCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div className="overflow-hidden">
        <img
          src={heroImage}
          alt={name}
          className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <header>
          <h3 className="text-xl font-semibold text-stone-900">{name}</h3>

          <p className="mt-2 text-2xl font-bold text-stone-900">{price}</p>
        </header>

        <ul className="flex flex-wrap items-center gap-4 text-sm text-stone-600">
          <li className="flex items-center gap-1.5">
            <BedDouble size={16} />
            {bedrooms} recámaras
          </li>
          <li className="flex items-center gap-1.5">
            <Bath size={16} />
            {bathrooms} baños
          </li>
          <li className="flex items-center gap-1.5">
            <Ruler size={16} />
            {area}
          </li>
        </ul>

        <Button variant="secondary" className="mt-auto w-full">
          Ver detalles
        </Button>
      </div>
    </Card>
  );
}
export default PropertyCard;
