import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

import type { GalleryItem } from "../data/gallery";

type GalleryLightboxProps = {
  item: GalleryItem;
  onClose: () => void;
};

function GalleryLightbox({ item, onClose }: GalleryLightboxProps) {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setClosing(true);
    window.setTimeout(onClose, 200);
  }, [onClose]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    closeButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }

      if (event.key !== "Tab" || !closeButtonRef.current) return;

      if (
        event.shiftKey &&
        document.activeElement === closeButtonRef.current
      ) {
        event.preventDefault();
        closeButtonRef.current.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [close]);

  const isOpen = visible && !closing;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Imagen ampliada: ${item.title}`}
      onClick={close}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-200 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-stone-900/80" aria-hidden="true" />

      <figure
        onClick={(event) => event.stopPropagation()}
        className={`relative transition-transform duration-200 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        <img
          src={item.image}
          alt={item.alt}
          className="max-h-[85vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
        />
      </figure>

      <button
        ref={closeButtonRef}
        type="button"
        onClick={close}
        aria-label="Cerrar imagen"
        className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-2.5 text-white backdrop-blur transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <X size={22} />
      </button>
    </div>
  );
}

export default GalleryLightbox;
