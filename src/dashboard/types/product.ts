export interface Product {
  barcode: string
  category_id: number | null
  description: string | null
  id: number
  maximum_quantity_in_stock: number | null
  minimum_quantity_in_stock: number | null
  name: string
  price_cost: number
  quantity_in_stock: number
  sales_price: number
  wholesale_price: number
}
