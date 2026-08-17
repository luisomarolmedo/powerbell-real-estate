import { useCallback, useEffect, useState } from "react";
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

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen, closeMobileMenu]);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/60 bg-white/95 shadow-[0_1px_3px_-1px_rgba(28,25,23,0.04)] backdrop-blur-md">
      <nav
        className="mx-auto grid h-[4.5rem] max-w-7xl grid-cols-[1fr_auto] items-center px-5 sm:px-6 md:grid-cols-[1fr_auto_1fr] lg:px-10"
        aria-label="Navegación principal"
      >
        <a
          href="#inicio"
          className="font-serif text-[1.65rem] font-semibold tracking-tight text-stone-900 transition-opacity hover:opacity-70 uppercase"
          aria-label="Altavia — Ir al inicio"
          onClick={handleInternalAnchorClick}
        >
          Altavia
        </a>

        <div className="hidden md:flex md:justify-center">
          <NavLinks />
        </div>

        <div className="hidden items-center justify-end gap-4 md:flex">
          <a href="#contacto" onClick={handleInternalAnchorClick}>
            <Button className="rounded-md px-5 py-2.5 text-[13px] tracking-wide">
              Agenda una visita
            </Button>
          </a>
        </div>

        <HamburgerButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
}

export default Navbar;
