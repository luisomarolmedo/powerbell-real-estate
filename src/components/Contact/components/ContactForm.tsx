import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "../../shared/Button";

import { contactSchema, type ContactFormData } from "../schemas/contactSchema";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    alert("¡Solicitud enviada correctamente!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="mb-2 block font-medium">Nombre</label>

        <input
          {...register("name")}
          className="w-full rounded-lg border border-stone-300 p-3"
          placeholder="Tu nombre"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block font-medium">Correo</label>

        <input
          {...register("email")}
          className="w-full rounded-lg border border-stone-300 p-3"
          placeholder="correo@ejemplo.com"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block font-medium">Teléfono</label>

        <input
          {...register("phone")}
          className="w-full rounded-lg border border-stone-300 p-3"
          placeholder="33 1234 5678"
        />

        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block font-medium">Mensaje</label>

        <textarea
          {...register("message")}
          rows={5}
          className="w-full rounded-lg border border-stone-300 p-3"
          placeholder="Cuéntanos qué tipo de departamento buscas..."
        />

        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <Button>Enviar solicitud</Button>
    </form>
  );
}

export default ContactForm;
