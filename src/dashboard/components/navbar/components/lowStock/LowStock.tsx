import { Tables } from "../../../../../../database.types";
import { DataTable } from "../../../tableProduct/DataTable";
import { COLUMNS_LOW_PRODUCT } from "./columns_low_product";
import { countLow, getProductsLow } from "./getProductsLow";

export const LowStock = () => {

  countLow()
  return (
    <section className="min-w-[800px] w-[1000px] max-w-[1200px]">
      <DataTable<Tables<"product">>
        columns={COLUMNS_LOW_PRODUCT}
        fetchData={getProductsLow}
        countData={countLow}
      />
    </section>
  );
};
