import { COLUMNS_PRODUCT } from "./columns.ts";
import { countProducts, getProducts } from "./getProducts.ts";
import { Tables } from "../../../../../../database.types.ts";
import { DataTable } from "../../../tableProduct/DataTable.tsx";

export const Inventory = () => {
  return (
    <section className="p-4 min-w-[800px] w-[1000px] max-w-[1200px]">
      <DataTable<Tables<"product">>
        columns={COLUMNS_PRODUCT}
        fetchData={getProducts}
        countData={countProducts}
      />
    </section>
  );
};
