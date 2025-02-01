export interface Product {
  id: number;
  code: string;
  name: string;
  description?: string;
  cost: number;
  price: number;
  wholesalePrice: number;
  quantity: number;
  categoryId: string;
  minimum_quantity: number;
  maximum_quantity: number;
}

export type ProductRows = Omit<
  Product,
  "id" | "description" | "minimum_quantity" | "maximum_quantity"
>;

export type NewProduct = Omit<Product, "id">;
