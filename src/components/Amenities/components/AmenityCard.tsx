type AmenityCardProps = {
  title: string;
  description: string;
};

function AmenityCard({ title, description }: AmenityCardProps) {
  return (
    <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="mb-3 text-xl font-semibold text-stone-900">{title}</h3>

      <p className="leading-relaxed text-stone-600">{description}</p>
    </article>
  );
}

export default AmenityCard;
