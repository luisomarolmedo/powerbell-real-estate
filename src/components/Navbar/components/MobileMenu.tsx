import Button from "../../shared/Button";
import { handleInternalAnchorClick } from "../../../utils/scroll";
import NavLinks from "./NavLinks";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu"
      className="border-t border-stone-200 bg-white md:hidden"
      role="region"
      aria-label="Menú de navegación móvil"
    >
      <NavLinks orientation="vertical" onLinkClick={onClose} />
      <div className="border-t border-stone-100 px-4 py-4">
        <a
          href="#contacto"
          onClick={(event) => {
            handleInternalAnchorClick(event);
            onClose();
          }}
        >
          <Button className="w-full">Agenda una visita</Button>
        </a>
      </div>
    </div>
  );
}

export default MobileMenu;
