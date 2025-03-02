import { Table, TableBody, TableColumn, TableHeader } from "@heroui/table";
import { useEffect, useState } from "react";
import { Product } from "../../../../../../core/database/types-database.ts";
import { lowInventoryProducts } from "./service/lowInventoryProducts.ts";

export const ListProductAlert = () => {
  const [, setInventory] = useState<Product[]>([]);

  const columns = [
    { key: "barcode", label: "CODIGO" },
    { key: "name", label: "NOMBRE" },
    { key: "status", label: "ESTADO" }
  ]

  useEffect(() => {
    lowInventoryProducts().then(data => setInventory(data ?? []));
  }, [])

  return (
    <Table>
      <TableHeader columns={columns}>
        {column => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody emptyContent="No hay contenido">{[]}</TableBody>
    </Table>
  );
};
