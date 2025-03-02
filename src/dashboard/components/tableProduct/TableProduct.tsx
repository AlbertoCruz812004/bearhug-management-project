import { COLUMNS_PRODUCT } from "./constants/columns.ts";
import { useAsyncList } from "@react-stately/data";
import { Key, ReactNode, useState } from "react";
import { loadData, sortData } from "./logic/sortTable.ts";
import { RenderTable } from "./component/RenderTable.tsx";
import { Product } from "../../types/product.ts";

interface props {
  fetchDataQuery: () => Promise<any>
  renderCell?: (columnKey: Key, cellValue: any) => ReactNode
};

export const TableProduct = ({ fetchDataQuery, renderCell }: props) => {
  const [isLoading, setIsLoading] = useState(true);

  let asyncListProduct = useAsyncList<Product>({
    async load() {
      return await loadData(setIsLoading, fetchDataQuery); // Devuelve el objeto con `items` como un array
    },
    sort: sortData<Product>
  });


  return (
    <div>
      <RenderTable columns={COLUMNS_PRODUCT} useAsyncList={asyncListProduct} isLoading={isLoading} renderCell={renderCell} />
    </div>
  )

};
