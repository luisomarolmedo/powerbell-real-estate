import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre."),

  email: z.email("Correo inválido."),

  phone: z.string().min(10, "Número inválido."),

  message: z.string().min(10, "Escribe un mensaje."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
