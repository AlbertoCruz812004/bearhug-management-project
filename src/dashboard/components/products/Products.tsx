import { Tab, Tabs } from "@heroui/tabs";
import { TableProduct } from "./components/tableProduct/TableProduct";

export const Products = () => {
  return (
    <section className="p-4">
      <h5>Productos</h5>
      <article>
        <Tabs aria-label="Options-dashboard">
          <Tab key="products" title="Productos">
            <TableProduct />
          </Tab>
        </Tabs>
      </article>
    </section>
  );
};
