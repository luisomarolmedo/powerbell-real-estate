import { useState } from "react";

import Container from "../shared/Container";
import SectionLabel from "../shared/SectionLabel";
import SectionTitle from "../shared/SectionTitle";

import GalleryImage from "./components/GalleryImage";
import GalleryLightbox from "./components/GalleryLightbox";
import { gallery } from "./data/gallery";

import type { GalleryItem } from "./data/gallery";

function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <section id="galeria" className="py-24" style={{ backgroundColor: "#F3F1EC" }}>
      <Container>
        <SectionLabel number="03" label="GALERÍA" />
        <SectionTitle
          title="Conoce cada espacio"
          subtitle="Explora las amenidades y áreas comunes diseñadas para brindarte una experiencia excepcional."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((image, index) => {
            const isFeatured = index === 0;
            const isRightColumn = index === 1 || index === 2;
            const isLast = index === gallery.length - 1;
            const isAreasVerdes = image.id === 7;

            return (
              <GalleryImage
                key={image.id}
                title={image.title}
                alt={image.alt}
                image={image.image}
                onSelect={() => setSelected(image)}
                className={
                  isFeatured
                    ? "lg:col-span-2 lg:row-span-2"
                    : isLast
                      ? "lg:col-span-2"
                      : ""
                }
                imgClassName={
                  isFeatured
                    ? "lg:aspect-auto lg:h-full"
                    : isRightColumn
                      ? "lg:aspect-[1/1]"
                      : isAreasVerdes
                        ? "lg:aspect-auto lg:h-full"
                        : ""
                }
              />
            );
          })}
        </div>
      </Container>

      {selected && (
        <GalleryLightbox item={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

export default Gallery;
