import { FormProduct } from "./components/FormProduct/FormProduct";
import { ProductValues } from "./components/FormProduct/schema/product.schema.js";

export const CreateProduct = () => {

  const handleSubmit = (product: ProductValues) => {
    const values = {
      barcode: product.code,
      name: product.name,
      price_cost: product.purchasePrice,
      sales_price: product.priceSale,
      wholesale_price: 0,
      category_id: product.category,
      quantity_in_stock: product.quantity,
      maximum_quantity_in_stock: product.maxQuantity,
      minimum_quantity_in_stock: product.minQuantity,
    }
    console.log(values);

    fetch("http://localhost:3000/insert-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Asegúrate de incluir este header
      },
      body: JSON.stringify(values)
    })
      .catch(error => console.log(error));
  }

  return (
    <section className="min-w-[800px] w-[1000px] max-w-[1200]">
      <FormProduct eventForm={handleSubmit} />
    </section>
  )
};
