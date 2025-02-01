import {
  getKeyValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { COLUMNS_PRODUCT } from "./constants/columns";
import { getProducts } from "../../queries/product.query";
import { useEffect, useState } from "react";
import { ProductRows } from "../../model/Product";
import { getCategory } from "../../queries/category.query";

export const TableProduct = () => {
  const [data, setData] = useState<ProductRows[]>([]);
  const [category, setCategory] = useState<string[]>([]);

  useEffect(() => {
    getProducts().then((products) => setData(products ?? []));
    getCategory().then((categories) => setCategory(categories ?? []));
  }, []);

  return (
    <div className="p-2">
      <Table isStriped selectionMode="single" color="primary">
        <TableHeader columns={COLUMNS_PRODUCT}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody
          emptyContent={"No se encontro ningun producto."}
          items={data}
        >
          {(row) => (
            <TableRow key={row.code}>
              {(columnKey) => (
                <TableCell>{getKeyValue(row, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
