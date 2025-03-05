import { Tables } from "../../../../../../database.types";
import { supabase } from "../../../../../core/services/supabase.service";

export default async function getProductsLow() {
  const { data: product, error } = await supabase
    .from("product")
    .select("barcode, name, quantity_in_stock")
    .lt("minimum_quantity_in_stock", 5)
    .returns<Tables<"product">[]>();

  if (error) throw new Error(error.message);

  return product ?? [];
}
