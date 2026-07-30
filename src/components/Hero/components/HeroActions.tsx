import CtaButton from "../../Navbar/components/CtaButton";

function HeroActions() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <CtaButton />

      <a href="#departamentos" className="...">
        Ver departamentos
      </a>
    </div>
  );
}

export default HeroActions;
