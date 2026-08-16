import Button from "../../shared/Button";
import { ArrowRight } from "lucide-react";
import { handleInternalAnchorClick } from "../../../utils/scroll";

function HeroActions() {
  return (
    <div className="flex items-center gap-6">
      <a href="#contacto" onClick={handleInternalAnchorClick}>
        <Button>Agenda una visita</Button>
      </a>

      <a
        href="#departamentos"
        className="group inline-flex items-center gap-2 text-sm font-medium text-stone-900"
        onClick={handleInternalAnchorClick}
      >
        Ver departamentos
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
}

export default HeroActions;
