import CtaButton from "./CtaButton";
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
        <CtaButton className="w-full" onClick={onClose} />
      </div>
    </div>
  );
}

export default MobileMenu;
