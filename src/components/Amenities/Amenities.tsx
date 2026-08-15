import { useState } from "react";
import AmenityCard from "./components/AmenityCard";
import AmenityModal from "./components/AmenityModal";
import { amenities, type Amenity } from "./data/amenities";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

function Amenities() {
  const [selectedAmenity, setSelectedAmenity] = useState<Amenity | null>(null);

  return (
    <section id="amenidades" className="bg-stone-50 py-20">
      <Container>
        <SectionTitle
          title="Amenidades diseñadas para tu estilo de vida"
          subtitle="Disfruta espacios creados para trabajar, descansar, ejercitarte y convivir sin salir de casa."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity) => (
            <AmenityCard
              key={amenity.id}
              title={amenity.title}
              description={amenity.description}
              icon={amenity.icon}
              onViewDetails={() => setSelectedAmenity(amenity)}
            />
          ))}
        </div>
      </Container>

      {selectedAmenity && (
        <AmenityModal
          amenity={selectedAmenity}
          onClose={() => setSelectedAmenity(null)}
        />
      )}
    </section>
  );
}

export default Amenities;
