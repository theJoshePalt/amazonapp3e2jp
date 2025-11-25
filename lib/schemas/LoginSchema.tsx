import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .email("El email debe ser de la uets")
    .regex(/@uets\.edu(\.ec)?$/, "Correo institucional inválido"),
  password: z.string().min(5, "La contraseña debe tener al menos 5 caracteres"),
});
