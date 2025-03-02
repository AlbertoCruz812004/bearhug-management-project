import { supabase } from "../../../../core/services/supabase.service";

export async function getProducts() {
  try {
    let { data: products, error } = await supabase
      .from('product')
      .select('barcode, name, purchase_cost, price, quantity')
      .order("name")

    if (error) {
      throw new Error(error.message)
    }

    return products;
  } catch (error) {
    console.error(error);
    return []
  }
}
