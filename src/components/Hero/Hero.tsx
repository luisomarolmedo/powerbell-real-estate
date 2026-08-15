import HeroContent from "./components/HeroContent";
import HeroImage from "./components/HeroImage";
import Container from "../shared/Container";

function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="bg-white min-h-[calc(100vh-4rem)] py-12"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
