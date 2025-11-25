import { z } from "zod";

export const RegisterSchema = z.object({
  username: z.string().min(3, "El usuario debe tener al menos 3 caracteres"),
  email: z
    .string()
    .email("Agrega o cambia a -uets- tu correo.")
    .regex(/@uets\.edu(\.ec)?$/, "Correo institucional inválido"),
  password: z.string().min(5, "La contraseña debe tener al menos 5 caracteres"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});
