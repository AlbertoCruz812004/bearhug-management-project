import { Product } from "../../../../types/product";
import { TableProduct } from "../../../tableProduct/TableProduct";
import { COLUMNS_LOW_PRODUCT } from "./columns_low_product";
import getProductsLow from "./getProductsLow";

export const LowStock = () => {
  return (
    <section className="min-w-[800px] w-[1000px] max-w-[1200px]">
      <TableProduct
        <Product>
        fetchDataQuery={getProductsLow}
        columns={COLUMNS_LOW_PRODUCT}
      />
    </section>
  );
};
