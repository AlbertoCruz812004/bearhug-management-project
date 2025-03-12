import { Tables } from "../../../../../../database.types";
import { supabase } from "../../../../../core/services/supabase.service";

export async function getProducts(index: number) {
  const dataLenght = index * 9;

  const { data: product, error } = await supabase
    .from("product")
    .select("id, barcode, name, price_cost, sales_price, wholesale_price, quantity_in_stock")
    .order("name")
    .range(dataLenght - 9, dataLenght)
    .returns<Tables<"product">[]>();

  if (error) throw new Error(error.message);

  return product ?? [];
}

export async function countProducts() {
  const { count, error } = await supabase
    .from('product')
    .select('id', { count: 'exact' })

  if (error) throw new Error(error.message)

  return count ?? 0
}
