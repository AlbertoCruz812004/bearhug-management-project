import { Tables } from "../../../../../../database.types";
import { DataTable } from "../../../tableProduct/DataTable";
import { COLUMN_CATEGORY } from "./columns_categories";
import { countCategories, getCategories } from "./getCategories";

export const Categories = () => {
  return (
    <section className="min-w-[800px] w-[1000px] max-w-[1200px]">
      <DataTable<Tables<"category">>
        columns={COLUMN_CATEGORY}
        fetchData={getCategories}
        countData={countCategories}
      />
    </section>
  );
};
