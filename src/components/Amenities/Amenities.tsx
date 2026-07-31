import AmenityCard from "./components/AmenityCard";
import { amenities } from "./data/amenities";
import Container from "../shared/Container";

function Amenities() {
  return (
    <section id="amenidades" className="bg-stone-50 py-20">
      <Container>
        <header className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-stone-900 sm:text-4xl">
            Amenidades diseñadas para tu estilo de vida
          </h2>

          <p className="mt-4 text-stone-600">
            Disfruta espacios creados para trabajar, descansar, ejercitarte y
            convivir sin salir de casa.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity) => (
            <AmenityCard
              key={amenity.id}
              title={amenity.title}
              description={amenity.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Amenities;
