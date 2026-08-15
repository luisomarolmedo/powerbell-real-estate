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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((image, index) => {
            const isFeatured = index === 0;
            const isRightColumn = index === 1 || index === 2;

            return (
              <GalleryImage
                key={image.id}
                title={image.title}
                image={image.image}
                className={
                  isFeatured ? "lg:col-span-2 lg:row-span-2" : ""
                }
                imgClassName={
                  isFeatured
                    ? "lg:aspect-auto lg:h-full"
                    : isRightColumn
                      ? "lg:aspect-[1/1]"
                      : ""
                }
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Gallery;
