import {supabase} from "../../../../../../core/services/supabase.service.ts";
import {Product} from "../../../../../../core/database/types-database.ts";

// type GetProductsResponse = Omit<Product, "id"| "category_id" | "description" | "max_quantity" | "min_quantity" | "supplier_id">

export async function getProducts() {
    try {
        let { data: products, error } = await supabase
            .from('products')
            .select('barcode, name, purchase_cost, price, quantity')
            .order("name")
            .returns<Product[]>()

        if(error) {
            throw new Error(error.message)
        }

        return products;
    } catch (error) {
        console.error(error);
        return []
    }
}