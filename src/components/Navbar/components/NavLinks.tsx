import { NAV_LINKS } from "../navConfig";

type NavLinksProps = {
  orientation?: "horizontal" | "vertical";
  onLinkClick?: () => void;
};

const linkStyles = {
  horizontal:
    "text-sm font-medium tracking-wide text-stone-600 transition-colors hover:text-stone-900",
  vertical:
    "block px-4 py-3 text-base font-medium text-stone-700 transition-colors hover:bg-stone-50 hover:text-stone-900",
};

function NavLinks({ orientation = "horizontal", onLinkClick }: NavLinksProps) {
  const isVertical = orientation === "vertical";

  return (
    <ul
      className={
        isVertical
          ? "flex flex-col divide-y divide-stone-100"
          : "flex items-center gap-8"
      }
    >
      {NAV_LINKS.map(({ label, href }) => (
        <li key={href}>
          <a
            href={href}
            className={linkStyles[orientation]}
            onClick={onLinkClick}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
