import Container from "../shared/Container";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Amenidades", href: "#amenidades" },
  { label: "Departamentos", href: "#departamentos" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white py-14">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:items-start md:text-left">
          <div>
            <h3 className="text-xl font-semibold text-stone-900">Terranova</h3>

            <p className="mt-2 text-sm text-stone-500">
              Vive donde siempre soñaste.
            </p>
          </div>

          <nav aria-label="Navegación principal">
            <ul className="flex flex-wrap justify-center gap-6 text-sm text-stone-600 md:justify-end">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-stone-900">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-stone-200 pt-6 text-center text-sm text-stone-500">
          © {new Date().getFullYear()} Terranova. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
