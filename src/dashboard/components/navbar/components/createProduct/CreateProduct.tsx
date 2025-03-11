import { FormProduct } from "./components/FormProduct/FormProduct";
import { insertProduct } from "./insertProduct.js";

export const CreateProduct = () => {

  return (
    <section className="min-w-[800px] w-[1000px] max-w-[1200]">
      <FormProduct eventForm={insertProduct} />
    </section>
  )
};
