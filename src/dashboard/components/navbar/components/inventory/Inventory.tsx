import { Tab, Tabs } from "@heroui/tabs";
import getProducts from "./getProducts.ts";
import { TableProduct } from "../../../tableProduct/TableProduct";
import { Key } from "react";
import { COLUMNS_PRODUCT } from "./columns.ts";
import { Product } from "../../../../types/product.ts";

export const Inventory = () => {
  const renderCell = (columnKey: Key, cellValue: any) => {
    switch (columnKey) {
      case "quantity_in_stock":
        return (
          <div className="text-danger-500">
            {cellValue}
          </div>
        );
      default:
        return cellValue;
    }
  };

  return (
    <section className="p-4 min-w-[800px] w-[1000px] max-w-[1200px]">
      <h5>Productos</h5>
      <article>
        <Tabs aria-label="Options-dashboard">
          <Tab key="products" title="Productos">
            <TableProduct
              <Product>
              fetchDataQuery={getProducts}
              columns={COLUMNS_PRODUCT}
              renderCell={renderCell}
            />
          </Tab>
        </Tabs>
      </article>
    </section>
  );
};
