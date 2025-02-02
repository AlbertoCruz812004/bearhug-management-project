import { AsyncListLoadOptions} from "@react-stately/data";
import {SortDescriptor} from "@heroui/table";
import {getProducts} from "../query/products.query.ts";
import {Product} from "../../../../../../core/database/types-database.ts";

export const loadProducts = async (setIsLoading: (loading: boolean) => void) => {
    try {
        const data = await getProducts();
        setIsLoading(false);
        return { items: data ?? [] }; // Asegura que `items` sea un array
    } catch (error) {
        console.error("Failed to load products:", error);
        setIsLoading(false);
        return { items: [] }; // Devuelve un array vacío en caso de error
    }
};

export const sortProducts = ({ items, sortDescriptor }: AsyncListLoadOptions<Product, string> & {sortDescriptor: SortDescriptor}) => {
    return {
        items: items.sort((a, b) => {
            let first = a[sortDescriptor.column as keyof Product];
            let second = b[sortDescriptor.column as keyof Product];
            let cmp = 0;
            if (typeof first === 'string' && typeof second === 'string') {
                cmp = first.localeCompare(second); // Comparación de cadenas
            } else if (typeof first === 'number' && typeof second === 'number') {
                cmp = first - second; // Comparación de números
            }

            if (sortDescriptor.direction === 'descending') {
                cmp *= -1;
            }

            return cmp;
        }),
    };
};