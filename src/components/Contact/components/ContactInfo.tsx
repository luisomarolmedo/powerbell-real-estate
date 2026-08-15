import { Mail, MapPin, Phone } from "lucide-react";

function ContactInfo() {
  return (
    <div className="space-y-6">
      <h3 className="text-3xl font-semibold text-stone-900">
        Agenda una visita
      </h3>

      <p className="text-stone-600">
        Nuestro equipo está listo para ayudarte a encontrar el departamento
        ideal para ti.
      </p>

      <div className="space-y-3 text-stone-700">
        <p className="flex items-center gap-2.5">
          <MapPin size={18} className="text-stone-500" />
          Guadalajara, Jalisco
        </p>

        <a
          href="tel:+523312345678"
          className="flex items-center gap-2.5 transition-colors hover:text-stone-900"
        >
          <Phone size={18} className="text-stone-500" />
          (33) 1234 5678
        </a>

        <a
          href="mailto:contacto@terranova.mx"
          className="flex items-center gap-2.5 transition-colors hover:text-stone-900"
        >
          <Mail size={18} className="text-stone-500" />
          contacto@terranova.mx
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
