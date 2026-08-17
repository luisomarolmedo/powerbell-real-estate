import HeroContent from "./components/HeroContent";
import HeroImage from "./components/HeroImage";
import Container from "../shared/Container";

function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="py-16 sm:py-20 lg:min-h-[clamp(40rem,calc(100vh-4rem),48rem)]"
      style={{ backgroundColor: "#FAFAF8" }}
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-0">
          <HeroContent />
          <div className="hidden lg:mx-12 lg:block lg:h-full lg:w-px lg:bg-stone-200" />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
