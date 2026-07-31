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
    <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="mb-3 text-xl font-semibold text-stone-900">{name}</h3>

      <p className="leading-relaxed text-stone-600">{price}</p>
      <p className="">{bedrooms}</p>
      <p className="">{bathrooms}</p>
      <p className="">{area}</p>
    </article>
  );
}

export default PropertyCard;
