import { Tables } from "../../../../../../database.types";
import { supabase } from "../../../../../core/services/supabase.service";

export async function getProductsLow(index: number) {
  const dataLenght = index * 9;

  const { data: product, error } = await supabase
    .from("product")
    .select("id, barcode, name, quantity_in_stock")
    .lt("minimum_quantity_in_stock", 100)
    .range(dataLenght - 9, dataLenght)
    .returns<Tables<"product">[]>();

  if (error) throw new Error(error.message);

  return product ?? [];
}

export async function countLow() {
  const { count, error } = await supabase
    .from("product")
    .select("id", { count: "exact" })
    .lt("quantity_in_stock", 10);

  if (error) throw new Error(error.message);

  return count ?? 0;
}
