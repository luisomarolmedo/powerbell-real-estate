import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Amenities from "../components/Amenities/Amenities";
import Gallery from "../components/Gallery/Gallery";
import Properties from "../components/Properties/Properties";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div id="amenidades">
          <Amenities />
        </div>
        <div id="departamentos">
          <Properties />
        </div>
        <div id="galeria">
          <Gallery />
        </div>
        <div id="contacto">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
