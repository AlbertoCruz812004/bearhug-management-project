import { Tables } from "../../../../../../database.types";
import { supabase } from "../../../../../core/services/supabase.service";
import { ProductValues } from "./components/FormProduct/schema/product.schema";

export async function insertProduct(product: ProductValues) {
  const nameCategory = await searchCategory(product.category)
  const { data, error } = await supabase
    .from('product')
    .insert({
      barcode: product.code,
      name: product.name,
      price_cost: product.purchasePrice,
      sales_price: product.priceSale,
      description: "",
      category_id: nameCategory,
      quantity_in_stock: product.quantity,
      maximum_quantity_in_stock: product.maxQuantity,
      minimum_quantity_in_stock: product.minQuantity,
      wholesale_price: 3
    })

  if (error) throw new Error(error.message)

  console.log(data);

}

const searchCategory = async (nameCategory: string) => {
  const { data: category, error } = await supabase
    .from("category")
    .select("id")
    .eq("name_category", nameCategory)
    .returns<Tables<"category">>()

  if (error) throw new Error(error.message)

  return category.id;
}
