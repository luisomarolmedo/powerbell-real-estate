import { useState } from "react";
import { properties, type Property } from "./data/properties";
import PropertyCard from "./components/PropertyCard";
import PropertyModal from "./components/PropertyModal";
import Container from "../shared/Container";
import SectionLabel from "../shared/SectionLabel";
import SectionTitle from "../shared/SectionTitle";

function Properties() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null,
  );

  return (
    <section id="departamentos" className="bg-white py-24">
      <Container>
        <SectionLabel number="02" label="RESIDENCIAS" />
        <SectionTitle
          title="Espacios diseñados para cada etapa de tu vida"
          subtitle="Encuentra el departamento ideal para ti y tu familia."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              name={property.name}
              price={property.price}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              area={property.area}
              image={property.image}
              onViewDetails={() => setSelectedProperty(property)}
            />
          ))}
        </div>
      </Container>

      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </section>
  );
}

export default Properties;
