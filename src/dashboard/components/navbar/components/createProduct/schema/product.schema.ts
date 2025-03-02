import { z } from "zod";

export const productSchema = z.object({
  code: z.string().min(1),
  name: z.string(),
  typeSell: z.enum(["unit", "grammage", "kit"]),
  purchasePrice: z.string().min(1),
  priceSale: z.string().min(0),
  category: z.string().min(1),
  quantity: z.string().min(0),
  minQuantity: z.string(),
  maxQuantity: z.string()
});

export type ProductValues = z.infer<typeof productSchema>; 
