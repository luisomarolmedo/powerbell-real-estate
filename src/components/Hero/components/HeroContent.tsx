import HeroActions from "./HeroActions";
import HeroBadge from "./HeroBadge";

function HeroContent() {
  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      <HeroBadge />

      <header className="flex flex-col gap-4">
        <h1
          id="hero-heading"
          className="font-serif text-4xl leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl"
        >
          Vive donde siempre soñaste.
        </h1>
        <p className="max-w-lg text-base leading-relaxed text-stone-600 sm:text-lg">
          Departamentos de diseño con acabados premium, espacios amplios y
          amenidades exclusivas en una ubicación privilegiada de Guadalajara.
        </p>
      </header>

      <HeroActions />
    </div>
  );
}

export default HeroContent;
