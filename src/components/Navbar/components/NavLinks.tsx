import { NAV_LINKS } from "../navConfig";
import { handleInternalAnchorClick } from "../../../utils/scroll";

type NavLinksProps = {
  orientation?: "horizontal" | "vertical";
  onLinkClick?: () => void;
};

const linkStyles = {
  horizontal:
    "relative text-[13px] font-normal tracking-wide text-stone-500 transition-colors duration-200 hover:text-stone-900 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full",
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
            onClick={(event) => {
              handleInternalAnchorClick(event);
              onLinkClick?.();
            }}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
