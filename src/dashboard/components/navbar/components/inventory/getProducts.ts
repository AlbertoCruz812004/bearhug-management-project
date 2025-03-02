import { supabase } from "../../../../../core/services/supabase.service";
import { Tables } from "../../../../../../database.types.ts"

export default async function getProducts() {
  const { data: product, error } = await supabase
    .from("product")
    .select("barcode, name, price_cost, sales_price, wholesale_price, quantity_in_stock")
    .order("name")
    .returns<Tables<"product">[]>()

  if (error) throw new Error(error.message)

  return product
}
