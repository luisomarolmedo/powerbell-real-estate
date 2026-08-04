import Container from "../shared/Container";

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row">
          <div>
            <h3 className="text-xl font-semibold text-stone-900">Terranova</h3>

            <p className="mt-2 text-sm text-stone-500">
              Vive donde siempre soñaste.
            </p>
          </div>

          <nav>
            <ul className="flex flex-wrap justify-center gap-6 text-sm text-stone-600">
              <li>
                <a href="#inicio" className="hover:text-stone-900">
                  Inicio
                </a>
              </li>

              <li>
                <a href="#amenidades" className="hover:text-stone-900">
                  Amenidades
                </a>
              </li>

              <li>
                <a href="#departamentos" className="hover:text-stone-900">
                  Departamentos
                </a>
              </li>

              <li>
                <a href="#contacto" className="hover:text-stone-900">
                  Contacto
                </a>
              </li>
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
