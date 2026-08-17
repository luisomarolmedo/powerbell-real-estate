import { useEffect } from "react";
import { useForm as useFormspree } from "@formspree/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "../../shared/Button";

import { contactSchema, type ContactFormData } from "../schemas/contactSchema";

const FORMSPREE_ID = "mvkpbkeb";

const baseFieldClass =
  "w-full rounded-xl border bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 transition-colors focus:outline-none focus:ring-2";

const fieldClassByState = (hasError: boolean) =>
  hasError
    ? "border-red-500 focus:border-red-500 focus:ring-red-500/15"
    : "border-stone-200 focus:border-stone-900 focus:ring-stone-900/10";

function ContactForm() {
  const [state, submit] = useFormspree<ContactFormData>(FORMSPREE_ID);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    if (state.succeeded) {
      reset();
    }
  }, [state.succeeded, reset]);

  const onSubmit = handleSubmit(async (data) => {
    await submit(data);
  });

  const isSubmitting = state.submitting;
  const hasSucceeded = state.succeeded;
  const hasError = !state.submitting && !state.succeeded && state.errors !== null;

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6 rounded-2xl border border-stone-200 bg-white p-8 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.06)]"
    >
      <div>
        <h3 className="text-2xl font-semibold tracking-tight text-stone-900">
          Agenda tu visita
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-stone-500">
          Completa tus datos y nos pondremos en contacto contigo.
        </p>
      </div>
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-stone-700"
        >
          Nombre
        </label>

        <input
          id="name"
          type="text"
          placeholder="Tu nombre"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`${baseFieldClass} ${fieldClassByState(Boolean(errors.name))}`}
          {...register("name")}
        />

        {errors.name && (
          <p
            id="name-error"
            role="alert"
            className="mt-1 text-sm text-red-600"
          >
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-stone-700"
        >
          Correo
        </label>

        <input
          id="email"
          type="email"
          placeholder="correo@ejemplo.com"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`${baseFieldClass} ${fieldClassByState(Boolean(errors.email))}`}
          {...register("email")}
        />

        {errors.email && (
          <p
            id="email-error"
            role="alert"
            className="mt-1 text-sm text-red-600"
          >
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-stone-700"
        >
          Teléfono
        </label>

        <input
          id="phone"
          type="tel"
          placeholder="33 1234 5678"
          aria-invalid={errors.phone ? true : undefined}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={`${baseFieldClass} ${fieldClassByState(Boolean(errors.phone))}`}
          {...register("phone")}
        />

        {errors.phone && (
          <p
            id="phone-error"
            role="alert"
            className="mt-1 text-sm text-red-600"
          >
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-stone-700"
        >
          Mensaje
        </label>

        <textarea
          id="message"
          rows={5}
          placeholder="Cuéntanos qué tipo de departamento buscas..."
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${baseFieldClass} ${fieldClassByState(Boolean(errors.message))}`}
          {...register("message")}
        />

        {errors.message && (
          <p
            id="message-error"
            role="alert"
            className="mt-1 text-sm text-red-600"
          >
            {errors.message.message}
          </p>
        )}
      </div>

      {hasSucceeded && (
        <p
          role="status"
          className="rounded-lg border border-green-300 bg-green-50 p-3 text-sm text-green-800"
        >
          ¡Gracias! Tu solicitud fue enviada correctamente.
        </p>
      )}

      {hasError && (
        <p
          role="alert"
          className="rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-700"
        >
          No pudimos enviar tu solicitud. Inténtalo nuevamente.
        </p>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl"
      >
        {isSubmitting ? "Enviando..." : "Agendar mi visita →"}
      </Button>
    </form>
  );
}

export default ContactForm;
