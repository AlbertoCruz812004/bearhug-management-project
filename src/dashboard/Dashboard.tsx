import { ToolBar } from "./components/";
import { Products } from "./components/products/Products.tsx";
import { DashboardLayout } from "./layouts/DashboardLayout.tsx";
import { NavBar } from "./navbar/NavBar.tsx";

export default function Dashboard() {
  return (
    <>
      <ToolBar />
      <DashboardLayout>
        <NavBar />
        <Products />
      </DashboardLayout>
    </>
  );
}
