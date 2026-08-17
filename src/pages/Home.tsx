import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Amenities from "../components/Amenities/Amenities";
import Properties from "../components/Properties/Properties";
import Gallery from "../components/Gallery/Gallery";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div>
          <Amenities />
        </div>
        <div>
          <Properties />
        </div>
        <div>
          <Gallery />
        </div>
        <div>
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
