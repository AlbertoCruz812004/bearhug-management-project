import {supabase} from "../../../../../../../core/services/supabase.service.ts";
import {Product} from "../../../../../../../core/database/types-database.ts";

export async function lowInventoryProducts() {
    try {
        const {data: products, error} = await supabase
            .from('products')
            .select("barcode, name, quantity, min_quantity")
            .returns<Product[]>();

        if (error) throw error;

        return products;
    } catch (error) {
        console.log(error);
    }
}