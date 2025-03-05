import { useAsyncList } from "@react-stately/data";
import { Key, ReactNode, useState } from "react";
import { loadData, sortData } from "./logic/sortTable.ts";
import { RenderTable } from "./component/RenderTable.tsx";

interface props<T> {
  fetchDataQuery: () => Promise<unknown>
  renderCell?: (columnKey: Key, cellValue: unknown) => ReactNode
  columns: Array<{key: string, label: string}>
};

export const TableProduct = <T,>({ fetchDataQuery, renderCell, columns }: props<T>) => {
  const [isLoading, setIsLoading] = useState(true);

  const asyncListProduct = useAsyncList<T>({
    async load() {
      return await loadData(setIsLoading, fetchDataQuery); // Devuelve el objeto con `items` como un array
    },
    sort: sortData<T>
  });

  return (
    <div>
      <RenderTable columns={columns} useAsyncList={asyncListProduct} isLoading={isLoading} renderCell={renderCell} />
    </div>
  )

};
