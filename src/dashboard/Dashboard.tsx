import { ToolBar } from "./components/";
import { DashboardLayout } from "./layouts/DashboardLayout.tsx";
import { NavBar } from "./components/navbar/NavBar.tsx";

export default function Dashboard() {
  return (
    <>
      <ToolBar />
      <DashboardLayout>
        <NavBar />
      </DashboardLayout>
    </>
  );
}
