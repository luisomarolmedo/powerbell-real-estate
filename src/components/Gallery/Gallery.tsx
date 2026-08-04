import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

import GalleryImage from "./components/GalleryImage";
import { gallery } from "./data/gallery";

function Gallery() {
  return (
    <section id="galeria" className="bg-white py-20">
      <Container>
        <SectionTitle
          title="Conoce cada espacio"
          subtitle="Explora las amenidades y áreas comunes diseñadas para brindarte una experiencia excepcional."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((image) => (
            <GalleryImage key={image.id} title={image.title} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Gallery;
