type GalleryImageProps = {
  title: string;
  image: string;
  className?: string;
  imgClassName?: string;
};

function GalleryImage({
  title,
  image,
  className = "",
  imgClassName = "",
}: GalleryImageProps) {
  return (
    <figure
      className={`group relative h-full overflow-hidden rounded-2xl ${className}`}
    >
      <img
        src={image}
        alt={title}
        className={`aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] ${imgClassName}`}
      />
      <div className="absolute inset-0 bg-stone-900/0 transition-colors duration-300 group-hover:bg-stone-900/20" />
    </figure>
  );
}

export default GalleryImage;
