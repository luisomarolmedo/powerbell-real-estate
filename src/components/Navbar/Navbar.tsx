import { useState } from "react";
import Button from "../shared/Button";
import { handleInternalAnchorClick } from "../../utils/scroll";
import HamburgerButton from "./components/HamburgerButton";
import MobileMenu from "./components/MobileMenu";
import NavLinks from "./components/NavLinks";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/95 backdrop-blur-md">
      <nav
        className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto] items-center px-4 sm:px-6 md:grid-cols-[1fr_auto_1fr] lg:px-8"
        aria-label="Navegación principal"
      >
        <a
          href="#inicio"
          className="font-serif text-3xl tracking-tight text-stone-900 transition-opacity hover:opacity-80"
          aria-label="Altum Living — Ir al inicio"
          onClick={handleInternalAnchorClick}
        >
          Terranova
        </a>

        <div className="hidden md:flex md:justify-center">
          <NavLinks />
        </div>

        <div className="hidden items-center justify-end gap-4 md:flex">
          <a href="#contacto" onClick={handleInternalAnchorClick}>
            <Button>Agenda una visita</Button>
          </a>
        </div>

        <HamburgerButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
}

export default Navbar;
