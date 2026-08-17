import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Bath, BedDouble, Check, Ruler, X } from "lucide-react";

import Button from "../../shared/Button";
import { handleInternalAnchorClick } from "../../../utils/scroll";

import type { Property } from "../data/properties";

type PropertyModalProps = {
  property: Property;
  onClose: () => void;
};

function PropertyModal({
  property: {
    name,
    price,
    bedrooms,
    bathrooms,
    area,
    image,
    floorPlan,
    floorPlanAlt,
    description,
    features,
  },
  onClose,
}: PropertyModalProps) {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [planExpanded, setPlanExpanded] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const close = useCallback(() => {
    setClosing(true);
    timeoutRef.current = window.setTimeout(onClose, 200);
  }, [onClose]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    dialogRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (planExpanded) {
          setPlanExpanded(false);
        } else {
          close();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(frame);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [close, planExpanded]);

  const isOpen = visible && !closing;

  return (
    <>
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
        aria-labelledby="property-modal-title"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className={`relative flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg outline-none transition-all duration-200 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="aspect-[4/3] w-full object-cover"
          />

          <button
            type="button"
            onClick={close}
            aria-label="Cerrar modal"
            className="absolute right-4 top-4 rounded-lg bg-white/90 p-2 text-stone-500 shadow-sm backdrop-blur transition-colors hover:bg-white hover:text-stone-900"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-5 overflow-y-auto p-6 sm:p-8">
          <header>
            <h2
              id="property-modal-title"
              className="text-2xl font-semibold text-stone-900"
            >
              {name}
            </h2>

            <p className="mt-2 text-2xl font-bold text-stone-900">{price}</p>
          </header>

          <ul className="flex flex-wrap items-center gap-4 text-sm text-stone-600">
            <li className="flex items-center gap-1.5">
              <BedDouble size={16} />
              {bedrooms} recámaras
            </li>
            <li className="flex items-center gap-1.5">
              <Bath size={16} />
              {bathrooms} baños
            </li>
            <li className="flex items-center gap-1.5">
              <Ruler size={16} />
              {area}
            </li>
          </ul>

          <p className="leading-relaxed text-stone-600">{description}</p>

          <ul className="space-y-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2.5 text-stone-700"
              >
                <Check size={16} className="shrink-0 text-stone-500" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="border-t border-stone-200 pt-5">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-stone-500">
              Plano arquitectónico
            </h3>
            <button
              type="button"
              onClick={() => setPlanExpanded(true)}
              className="group w-full cursor-zoom-in rounded-lg border border-stone-200 transition-shadow hover:shadow-md"
            >
              <img
                src={floorPlan}
                alt={floorPlanAlt}
                className="w-full rounded-lg object-contain transition-opacity group-hover:opacity-90"
              />
            </button>
          </div>

          <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button variant="secondary" onClick={close} className="w-full sm:w-auto">
              Cerrar
            </Button>

            <a href="#contacto" onClick={handleInternalAnchorClick}>
              <Button className="w-full sm:w-auto">Agendar una visita</Button>
            </a>
          </div>
        </div>
      </div>
    </div>

    {planExpanded &&
      createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={floorPlanAlt}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 opacity-100"
          onClick={() => setPlanExpanded(false)}
        >
          <div className="absolute inset-0 bg-stone-900/80" aria-hidden="true" />

          <button
            type="button"
            onClick={() => setPlanExpanded(false)}
            aria-label="Cerrar plano"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2.5 text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            <X size={22} />
          </button>

          <img
            src={floorPlan}
            alt={floorPlanAlt}
            onClick={(event) => event.stopPropagation()}
            className="relative z-10 max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
          />
        </div>,
        document.body,
      )}
    </>
  );
}

export default PropertyModal;
