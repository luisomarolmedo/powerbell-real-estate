import Container from "../shared/Container";
import { handleInternalAnchorClick } from "../../utils/scroll";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Amenidades", href: "#amenidades" },
  { label: "Departamentos", href: "#departamentos" },
  { label: "Galería", href: "#galeria" },
];

function Footer() {
  return (
    <footer className="py-20" style={{ backgroundColor: "#1C1917" }}>
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center text-center">
            <h3 className="font-serif text-4xl tracking-tight text-white">
              ALTAVIA
            </h3>
            <p className="mt-4 text-sm text-stone-400">
              Vive donde siempre soñaste.
            </p>
            <p className="mt-8 max-w-md text-xl leading-relaxed text-stone-300">
              Tu próximo espacio comienza aquí.
            </p>
          </div>

          <div className="h-px w-full bg-stone-700" />

          <div className="grid gap-10 sm:grid-cols-2 sm:gap-8 md:grid-cols-[1fr_1fr_auto]">
            <div>
              <h4 className="mb-4 text-xs font-medium tracking-[0.2em] text-stone-500">
                EXPLORA
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-stone-400 transition-colors hover:text-white"
                      onClick={handleInternalAnchorClick}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-medium tracking-[0.2em] text-stone-500">
                CONTACTO
              </h4>
              <ul className="space-y-2.5 text-sm text-stone-400">
                <li>Guadalajara, Jalisco</li>
                <li>
                  <a
                    href="mailto:contacto@altavia.example"
                    className="transition-colors hover:text-white"
                  >
                    contacto@altavia.example
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+523312345678"
                    className="transition-colors hover:text-white"
                  >
                    (33) 1234 5678
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="h-px w-full bg-stone-700" />

          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <span className="font-serif text-lg tracking-tight text-stone-500">
              ALTAVIA
            </span>
            <span className="text-xs text-stone-500">
              &copy; {new Date().getFullYear()} Altavia. Todos los derechos
              reservados.
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
