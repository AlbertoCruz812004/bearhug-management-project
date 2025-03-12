import { z } from "zod";

export const productSchema = z.object({
  code: z.string().min(1).max(15),
  name: z.string().min(1).max(70),
  typeSell: z.enum(["unit", "grammage", "kit"]),
  purchasePrice: z.string().min(1),
  priceSale: z.string().min(0),
  category: z.string().min(1),
  quantity: z.string().min(0),
  minQuantity: z.string().optional().default("0"),
  maxQuantity: z.string().optional().default("0")
});

export type ProductValues = z.infer<typeof productSchema>; 
