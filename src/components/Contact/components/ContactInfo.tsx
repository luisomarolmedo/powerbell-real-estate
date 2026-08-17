import { Mail, MapPin, Phone } from "lucide-react";

function ContactInfo() {
  return (
    <div className="flex flex-col gap-10">
      <div className="space-y-6">
        <h3 className="text-3xl font-semibold tracking-tight text-stone-900">
          Agenda una visita
        </h3>

        <p className="max-w-md leading-relaxed text-stone-500">
          Nuestro equipo está listo para ayudarte a encontrar el departamento
          ideal para ti.
        </p>

        <div className="space-y-4 text-stone-700">
          <p className="flex items-center gap-3">
            <MapPin size={18} className="text-stone-400" />
            Guadalajara, Jalisco
          </p>

          <a
            href="tel:+523312345678"
            className="flex items-center gap-3 transition-colors hover:text-stone-900"
          >
            <Phone size={18} className="text-stone-400" />
            (33) 1234 5678
          </a>

          <a
            href="mailto:contacto@altavia.mx"
            className="flex items-center gap-3 transition-colors hover:text-stone-900"
          >
            <Mail size={18} className="text-stone-400" />
            contacto@altavia.mx
          </a>
        </div>
      </div>

      <div className="border-t border-stone-300 pt-8">
        <p className="font-serif text-2xl leading-snug tracking-tight text-stone-900">
          Tu próximo espacio
          <br />
          comienza aquí.
        </p>
      </div>

      <div className="border-t border-stone-300 pt-8">
        <p className="font-serif text-lg tracking-tight text-stone-900">
          Altavia
        </p>
        <p className="mt-1 text-sm text-stone-400">
          Vive donde siempre soñaste.
        </p>
      </div>
    </div>
  );
}

export default ContactInfo;
