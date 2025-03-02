import { Tab, Tabs } from "@heroui/tabs";
import getProducts from "./getProducts.ts";
import { TableProduct } from "../../../tableProduct/TableProduct";
import { Key } from "react";

export const Inventory = () => {

  const renderCell = (columnKey: Key, cellValue: any) => {
    switch (columnKey) {
      case "quantity_in_stock":
        return (
          <div className="text-danger-500">{cellValue}</div>
        )
      default:
        return cellValue
    }
  }

  return (
    <section className="p-4 min-w-[800px] w-[1000px] max-w-[1200px]">
      <h5>Productos</h5>
      <article>
        <Tabs aria-label="Options-dashboard">
          <Tab key="products" title="Productos">
            <TableProduct fetchDataQuery={getProducts} renderCell={renderCell} />
          </Tab>
        </Tabs>
      </article>
    </section>
  );
};
