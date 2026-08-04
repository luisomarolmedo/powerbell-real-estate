import AmenityCard from "./components/AmenityCard";
import { amenities } from "./data/amenities";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

function Amenities() {
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
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Amenities;
