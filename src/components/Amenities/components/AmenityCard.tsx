import Card from "../../shared/Card";

type AmenityCardProps = {
  title: string;
  description: string;
};

function AmenityCard({ title, description }: AmenityCardProps) {
  return (
    <Card className="p-6">
      <h3 className="mb-3 text-xl font-semibold text-stone-900">{title}</h3>

      <p className="leading-relaxed text-stone-600">{description}</p>
    </Card>
  );
}

export default AmenityCard;
