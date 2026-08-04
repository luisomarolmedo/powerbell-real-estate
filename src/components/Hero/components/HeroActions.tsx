import Button from "../../shared/Button";

function HeroActions() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Button>Agenda una visita</Button>

      <Button variant="secondary">Ver departamentos</Button>
    </div>
  );
}

export default HeroActions;
