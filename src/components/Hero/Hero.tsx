import HeroContent from "./components/HeroContent";
import HeroImage from "./components/HeroImage";
import Container from "../shared/Container";

function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="bg-white py-16 sm:py-20 min-h-[calc(100vh-4rem)]"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
