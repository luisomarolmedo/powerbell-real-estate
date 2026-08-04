import heroImage from "../../../assets/images/hero.png";
import Button from "../../shared/Button";

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
    <article className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
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

        <Button>Ver detalles</Button>
      </div>
    </article>
  );
}
export default PropertyCard;
