import { Categories } from "./components/categories/Categories";
import { CreateProduct } from "./components/createProduct/CreateProduct";
import { Employee } from "./components/employee/Employee";
import { Inventory } from "./components/inventory/Inventory";
import { LowStock } from "./components/lowStock/LowStock";
import { Start } from "./components/start/Start";
import {
  ArrowListIcon,
  BoxPlusIcon,
  ChartDownIcon,
  EmployeeIcons,
  HomeIcon,
  ShoppingCartIcon,
} from "./icons";
import { TabLayout } from "./layouts/TabLayout";

export const options = [
  {
    key: "inicio",
    title: <TabLayout icon={<HomeIcon />} text="Inicio" />,
    element: <Start />,
  },
  {
    key: "inventory",
    title: <TabLayout icon={<ShoppingCartIcon />} text="Inventario" />,
    element: <Inventory />,
  },
  {
    key: "categoria",
    title: <TabLayout icon={<ArrowListIcon />} text="Categoria" />,
    element: <Categories />,
  },
  {
    key: "agregar",
    title: <TabLayout icon={<BoxPlusIcon />} text="Agregar Producto" />,
    element: <CreateProduct />,
  },
  {
    key: "stock",
    title: <TabLayout icon={<ChartDownIcon />} text="Stock Bajo" />,
    element: <LowStock />,
  },
  {
    key: "empleados",
    title: <TabLayout icon={<EmployeeIcons />} text="Empleados" />,
    element: <Employee />,
  },
];
