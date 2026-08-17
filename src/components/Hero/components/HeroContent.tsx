import HeroActions from "./HeroActions";
import HeroBadge from "./HeroBadge";

function HeroContent() {
  return (
    <div className="flex flex-col gap-8 lg:gap-10">
      <HeroBadge />

      <header className="flex flex-col gap-4">
        <h1
          id="hero-heading"
          className="max-w-2xl font-serif text-5xl font-semibold leading-tight tracking-tight text-stone-900 lg:text-6xl"
        >
          Vive donde siempre soñaste.
        </h1>
        <p className="max-w-xl text-lg leading-8 text-stone-600">
          Departamentos de diseño con acabados premium, espacios amplios y
          amenidades exclusivas en una ubicación privilegiada de Guadalajara.
        </p>
      </header>

      <HeroActions />

      <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.25em] text-stone-400">
        Altavia Residencial · Guadalajara
      </p>
    </div>
  );
}

export default HeroContent;
