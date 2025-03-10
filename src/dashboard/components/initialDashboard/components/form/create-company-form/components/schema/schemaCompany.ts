import { z } from "zod";

export const schemaCompany = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  adddatas: z.string().default("sin dirección"),
  description: z.string().default("sin descripción"),
});

export type CompanyFormValues = z.infer<typeof schemaCompany>;
