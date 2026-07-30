import HeroContent from "./components/HeroContent";
import HeroImage from "./components/HeroImage";

function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="bg-white py-16 sm:py-20 min-h-[calc(100vh-4rem)]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}

export default Hero;
