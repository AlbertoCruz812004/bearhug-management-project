import { useState } from "react";
import { FormProduct } from "./components/FormProduct/FormProduct";
import { ProductValues } from "./components/FormProduct/schema/product.schema.js";
import Modal from "../../../../../core/components/Modal.js";
import CheckIcon from "../../../../../home/components/pricing/icons/CheckIcon.js";
import { ExclamationIcon } from "../../../../../dev/icons/ExclamationIcon.js";

interface Response {
  status: number;
  message: string;
  error?: string;
}

export const CreateProduct = () => {
  const [data, setData] = useState<Response | null>(null);

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
      minimum_quantity_in_stock: product.minQuantity
    };
    console.log(values);

    fetch("http://localhost:3000/insert-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // Asegúrate de incluir este header
      },
      body: JSON.stringify(values)
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setData(json);
      })
      .catch(error => console.log(error));
  };

  return (
    <section className="min-w-[800px] w-[1000px] max-w-[1200]">
      <FormProduct eventForm={handleSubmit} />
      <Modal isOpen={!!data} setIsOpen={() => setData(null)} hiddenButtonClose>
        <div className="w-[350px] text-center">
          {
            data?.status === 200 
              ? <CheckIcon classNames="mx-auto w-[40px] h-[40px] text-green-600" /> 
              : <ExclamationIcon classNames="mx-auto w-[40px] h-[40px] text-danger-400" />
          }
          {!!data &&
            <p className={data?.status === 200 ? "text-primary-400 mt-5" : "text-danger-400 mt-5"}>
              {data.message}
            </p>}
        </div>
      </Modal>
    </section>
  );
};
