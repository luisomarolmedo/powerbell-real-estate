import heroImage from '../../../assets/images/hero.png'

function HeroImage() {
  return (
    <figure className="w-full overflow-hidden rounded-2xl shadow-lg shadow-stone-900/10">
      <img
        src={heroImage}
        alt="Vista del desarrollo residencial premium en Guadalajara"
        className="aspect-[4/5] w-full object-cover sm:aspect-[5/6] lg:aspect-[4/5]"
      />
    </figure>
  )
}

export default HeroImage
