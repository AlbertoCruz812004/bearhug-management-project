import { useState } from "react";
import { FormProduct } from "./components/FormProduct/FormProduct";
import { ProductValues } from "./components/FormProduct/schema/product.schema.js";
import Modal from "../../../../../core/components/Modal.js";
import CheckIcon from "../../../../../home/components/pricing/icons/CheckIcon.js";
import { ExclamationIcon } from "../../../../../dev/icons/ExclamationIcon.js";
import { supabase } from "../../../../../core/services/supabase.service.js";
import { insertProduct } from "./insertProduct.js";
import { Tables } from "../../../../../../database.types.js";

interface Response {
  status: number;
  message: string;
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
      minimum_quantity_in_stock: product.minQuantity,
    };
    console.log(values);
    insertProduct(values as any).then((res) =>
      setData({ message: res.messages, status: res.status })
    );
  };

  return (
    <section className="min-w-[800px] w-[1000px] max-w-[1200] h-[500px] bg-gray-200 dark:bg-zinc-800 rounded-lg mx-auto p-8">
      <FormProduct eventForm={handleSubmit} />
      <Modal isOpen={!!data} setIsOpen={() => setData(null)}>
        <div className="w-[350px] text-center">
          {data?.status === 200 ? (
            <CheckIcon classNames="mx-auto w-[40px] h-[40px] text-green-600" />
          ) : (
            <ExclamationIcon classNames="mx-auto w-[40px] h-[40px] text-danger-400" />
          )}
          {!!data && (
            <p
              className={
                data?.status === 200
                  ? "text-primary-400 mt-5"
                  : "text-danger-400 mt-5"
              }
            >
              {data.message}
            </p>
          )}
        </div>
      </Modal>
    </section>
  );
};
