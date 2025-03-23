import { Tables } from "../../../../../../database.types";
import { supabase } from "../../../../../core/services/supabase.service";

export const searchCategory = async () => {
  const { data: category } = await supabase
    .from("category")
    .select("id, name_category")
    .returns<Tables<"category">[]>();

  return (
    category?.map((item) => {
      return { value: item.id, text: item.name_category };
    }) ?? []
  );
};

export const insertProduct = async (values: Tables<"product">) => {
  const { data, error } = await supabase
    .from("product")
    .insert([
      {
        id: String(values.barcode + values.name),
        name: values.name, // Nombre del producto
        barcode: values.barcode,
        category_id: values.category_id,
        price_cost: values.price_cost,
        sales_price: values.sales_price,
        wholesale_price: values.wholesale_price,
        quantity_in_stock: values.quantity_in_stock,
        maximum_quantity_in_stock: values.maximum_quantity_in_stock,
        minimum_quantity_in_stock: values.minimum_quantity_in_stock,
      },
    ])
    .select(); // Selecciona los datos insertados

  if (error) {
    return { messages: "no fue posible registrar el producto", status: 400 };
  }

  return { messages: "producto agregado con exito", status: 200 };
};
