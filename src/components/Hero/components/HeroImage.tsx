import heroImage from "../../../assets/images/AltaviaMain.jpg";

function HeroImage() {
  return (
    <figure className="w-full overflow-hidden rounded-2xl shadow-[0_8px_30px_-4px_rgba(28,25,23,0.08)]">
      <img
        src={heroImage}
        alt="Vista del desarrollo residencial premium en Guadalajara"
        className="aspect-[4/5] w-full object-cover sm:aspect-[5/6] lg:aspect-square"
      />
    </figure>
  );
}

export default HeroImage;
