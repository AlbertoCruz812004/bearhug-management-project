import { Key } from "react";
import { ProductRows } from "../../model/Product";

export const renderCell = (product: ProductRows, columnKey: Key) => {
  const cellValue = product[columnKey as keyof ProductRows];

  return cellValue;
};
