import type { LucideIcon } from "lucide-react";
import Card from "../../shared/Card";

type AmenityCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

function AmenityCard({ title, description, icon: Icon }: AmenityCardProps) {
  return (
    <Card className="flex h-full flex-col gap-4 p-6">
      <div className="flex size-12 items-center justify-center rounded-xl bg-stone-100 text-stone-700">
        <Icon size={22} />
      </div>

      <h3 className="text-xl font-semibold text-stone-900">{title}</h3>

      <p className="leading-relaxed text-stone-600">{description}</p>
    </Card>
  );
}

export default AmenityCard;
