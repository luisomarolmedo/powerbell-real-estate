import { properties } from "./data/properties";
import PropertyCard from "./components/PropertyCard";
import Container from "../shared/Container";

function Properties() {
  return (
    <section id="departamentos" className="bg-stone-50 py-20">
      <Container>
        <header className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-stone-900 sm:text-4xl">
            Espacios diseñados para cada etapa de tu vida
          </h2>

          <p className="mt-4 text-stone-600">Esto se cambiará después</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              name={property.name}
              price={property.price}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              area={property.area}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Properties;
