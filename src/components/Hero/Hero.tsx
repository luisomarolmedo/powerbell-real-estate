import HeroContent from "./components/HeroContent";
import HeroImage from "./components/HeroImage";
import Container from "../shared/Container";

function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="bg-white py-16 sm:py-20 lg:min-h-[clamp(40rem,calc(100vh-4rem),48rem)]"
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
