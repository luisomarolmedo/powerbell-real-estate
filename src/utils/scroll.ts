import type { MouseEvent } from "react";

function scrollToHash(href: string) {
  const id = href.replace(/^#/, "");
  const element = document.getElementById(id);

  if (!element) return;

  const header = document.querySelector("header");
  const headerHeight = header?.getBoundingClientRect().height ?? 0;

  const elementTop =
    element.getBoundingClientRect().top + window.scrollY - headerHeight;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  window.scrollTo({
    top: elementTop,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}

export function handleInternalAnchorClick(
  event: MouseEvent<HTMLAnchorElement>,
) {
  const href = event.currentTarget.getAttribute("href");

  if (!href || href === "#" || !href.startsWith("#")) return;

  event.preventDefault();

  window.history.pushState(null, "", href);

  scrollToHash(href);
}

window.addEventListener("popstate", () => {
  const hash = window.location.hash;
  if (hash) {
    scrollToHash(hash);
  }
});
