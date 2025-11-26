import { z } from "zod";

export const TaskSchema = z.object({
  title: z.string().min(3, "El título debe tener mínimo 3 caracteres"),
  description: z.string().min(5, "La descripción es muy corta"),
});
