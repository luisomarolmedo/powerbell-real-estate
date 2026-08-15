import { useCallback, useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";

import Button from "../../shared/Button";

import type { Amenity } from "../data/amenities";

type AmenityModalProps = {
  amenity: Amenity;
  onClose: () => void;
};

function AmenityModal({
  amenity: { icon: Icon, title, modalDescription, details },
  onClose,
}: AmenityModalProps) {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setClosing(true);
    window.setTimeout(onClose, 200);
  }, [onClose]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    dialogRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [close]);

  const isOpen = visible && !closing;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-200 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={close}
    >
      <div
        className="absolute inset-0 bg-stone-900/50 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="amenity-modal-title"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className={`relative flex w-full max-w-lg flex-col gap-5 rounded-2xl border border-stone-200 bg-white p-6 shadow-lg outline-none transition-all duration-200 sm:p-8 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        <header className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-xl bg-stone-100 text-stone-700">
              <Icon size={22} />
            </div>

            <h2
              id="amenity-modal-title"
              className="text-2xl font-semibold text-stone-900"
            >
              {title}
            </h2>
          </div>

          <button
            type="button"
            onClick={close}
            aria-label="Cerrar modal"
            className="rounded-lg p-2 text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-900"
          >
            <X size={20} />
          </button>
        </header>

        <p className="leading-relaxed text-stone-600">{modalDescription}</p>

        <ul className="space-y-2">
          {details.map((detail) => (
            <li
              key={detail}
              className="flex items-center gap-2.5 text-stone-700"
            >
              <Check size={16} className="shrink-0 text-stone-500" />
              {detail}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <Button
            variant="secondary"
            onClick={close}
            className="w-full sm:w-auto"
          >
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AmenityModal;
