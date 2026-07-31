import Button from "../../shared/Button";

function HeroActions() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Button />

      <a href="#departamentos" className="...">
        Ver departamentos
      </a>
    </div>
  );
}

export default HeroActions;
