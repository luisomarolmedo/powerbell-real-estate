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
    <Card className="">
      <img src={heroImage} alt={name} className="h-64 w-full object-cover" />

      <div className="space-y-4 p-6">
        <header>
          <h3 className="text-xl font-semibold text-stone-900">{name}</h3>

          <p className="mt-2 text-2xl font-bold text-stone-900">{price}</p>
        </header>

        <ul className="flex flex-wrap gap-4 text-sm text-stone-600">
          <li>🛏 {bedrooms} recámaras</li>
          <li>🚿 {bathrooms} baños</li>
          <li>📐 {area}</li>
        </ul>

        <Button variant="secondary">Ver detalles</Button>
      </div>
    </Card>
  );
}
export default PropertyCard;
