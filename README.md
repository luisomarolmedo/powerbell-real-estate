# Altavia Residencial

Concepto de sitio web para un desarrollo residencial premium en Guadalajara, Jalisco, México. Proyecto ficticio creado como parte de un portafolio de desarrollo web frontend.

## Preview

https://altavia-sepia.vercel.app

## Características

- Navbar responsive con menú hamburguesa en mobile
- Hero con layout de dos columnas
- 6 amenidades con tarjetas interactivas y modales de detalle
- 3 departamentos con información, precios y planos arquitectónicos ampliables
- Galería de imágenes con lightbox
- Formulario de contacto con validación y envío a Formspree
- Smooth scroll con soporte para `prefers-reduced-motion`
- Diseño responsive mobile-first
- Accesibilidad básica en interacciones principales (modales, formulario, navegación)

## Tecnologías

- [React](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Vite](https://vitejs.dev/) — Build tool
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [React Hook Form](https://react-hook-form.com/) — Form management
- [Zod](https://zod.dev/) — Schema validation
- [Formspree](https://formspree.io/) — Form backend
- [Lucide React](https://lucide.dev/) — Icons

## Arquitectura

```
src/
├── main.tsx                  # Entry point
├── App.tsx                   # Root component
├── index.css                 # Tailwind import + global styles
├── theme.ts                  # Design tokens
├── pages/
│   └── Home.tsx              # Page composition
├── components/
│   ├── shared/               # Button, Card, Container, Section, SectionLabel, SectionTitle
│   ├── Navbar/               # Navigation + mobile menu
│   ├── Hero/                 # Hero section
│   ├── Amenities/            # Amenities grid + modal
│   ├── Properties/           # Properties grid + modal + floor plans
│   ├── Gallery/              # Image gallery + lightbox
│   ├── Contact/              # Contact form + info
│   └── Footer/               # Footer
├── assets/
│   └── images/               # Project images and floor plans
└── utils/
    └── scroll.ts             # Smooth scroll utilities
```

Cada feature principal (Amenities, Properties, Gallery, Contact) está organizada por dominio en su propia carpeta con subdirectorios `data/` y `components/` cuando aplica. Los datos estáticos están separados de la lógica de presentación.

## Funcionalidades destacadas

- **Smooth scrolling** personalizado con manejo de `prefers-reduced-motion` y offset para el navbar sticky.
- **Modales reutilizables** con animaciones de entrada/salida (opacity + scale), cierre con Escape y body scroll lock.
- **PropertyModal** con visualización ampliada de planos arquitectónicos usando React Portal para renderizar el lightbox fuera del contexto de apilamiento del modal.
- **GalleryLightbox** con trap de focus y cierre por Escape o clic fuera.
- **Formularios tipados y validados** con React Hook Form + Zod, integrados con Formspree para el envío.
- **Diseño responsive** mobile-first con breakpoints en sm, md y lg.
- **Accesibilidad básica**: roles ARIA en modales, `aria-expanded` en menú hamburguesa, `aria-invalid`/`aria-describedby` en campos de formulario, mensajes de error con `role="alert"`.

## Instalación y desarrollo

```bash
git clone <repository-url>
cd powerbell-real-estate
npm install
npm run dev
```

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Build de producción (`tsc -b && vite build`) |
| `npm run preview` | Preview del build de producción |
| `npm run lint` | Linting con ESLint |

## Estructura de deploy

El build genera archivos estáticos en `dist/`, compatibles con cualquier hosting estático (Vercel, Netlify, Cloudflare Pages, etc.). No se requieren variables de entorno.
