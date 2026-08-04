import heroImage from "../../../assets/images/hero.png";

type GalleryImageProps = {
  title: string;
};

function GalleryImage({ title }: GalleryImageProps) {
  return (
    <figure className="group overflow-hidden rounded-2xl">
      <img
        src={heroImage}
        alt={title}
        className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
      />
    </figure>
  );
}

export default GalleryImage;
