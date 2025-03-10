import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email("Correo invalido").min(1, "El correo es requerido"),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caractedata"),
});

export type FormValues = z.infer<typeof formSchema>;
