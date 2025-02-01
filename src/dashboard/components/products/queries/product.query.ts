import { supabase } from "../../../../core/services/supabase.service";
import { ProductRows } from "../model/Product";

export async function getProducts() {
  try {
    let { data: products, error } = await supabase
      .from("products")
      .select(
        "code, name, cost, price, wholesale_price, quantity, category_id(name)"
      );

    if (error) {
      throw new Error(error.message);
    }

    const data = products?.map((item) => {
      const product: ProductRows = {
        code: item.code,
        name: item.name,
        cost: item.cost,
        price: item.price,
        wholesalePrice: item.wholesale_price,
        quantity: item.quantity,
        categoryId: item.category_id[-1].name,
      };
      return product;
    });

    console.log(data, typeof data);

    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
}
