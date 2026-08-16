type GalleryImageProps = {
  title: string;
  alt: string;
  image: string;
  onSelect: () => void;
  className?: string;
  imgClassName?: string;
};

function GalleryImage({
  title,
  alt,
  image,
  onSelect,
  className = "",
  imgClassName = "",
}: GalleryImageProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`Ampliar imagen: ${title}`}
      className={`group relative block h-full w-full overflow-hidden rounded-2xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500 ${className}`}
    >
      <img
        src={image}
        alt={alt}
        className={`aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] ${imgClassName}`}
      />
      <div className="absolute inset-0 bg-stone-900/0 transition-colors duration-300 group-hover:bg-stone-900/20" />
    </button>
  );
}

export default GalleryImage;
