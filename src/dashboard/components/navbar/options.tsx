import { Categories } from "./components/categories/Categories";
import { CreateProduct } from "./components/createProduct/CreateProduct";
import { Start } from "./components/start/Start";
import {
  ArrowListIcon,
  BoxPlusIcon,
  ChartDownIcon,
  CheckIcon,
  EmployeeIcons,
  HomeIcon,
  ShoppingCartIcon
} from "./icons";
import { TabLayout } from "./layouts/TabLayout";

export const options = [
  {
    key: "inicio",
    title: <TabLayout icon={<HomeIcon />} text="Inicio" />,
    element: <Start />
  },
  {
    key: "inventory",
    title: <TabLayout icon={<ShoppingCartIcon />} text="Inventario" />
    //element: <Inventory />
  },
  {
    key: "categoria",
    title: <TabLayout icon={<ArrowListIcon />} text="Categoria" />,
    element: <Categories />
  },
  {
    key: "agregar",
    title: <TabLayout icon={<BoxPlusIcon />} text="Agregar Producto" />,
    element: <CreateProduct />
  },
  {
    key: "stock",
    title: <TabLayout icon={<ChartDownIcon />} text="Stock Bajo" />
    //element: <LowStock />
  },
  {
    key: "disponibilidad",
    title: <TabLayout icon={<CheckIcon />} text="Disponibilidad" />
  },
  {
    key: "empleados",
    title: <TabLayout icon={<EmployeeIcons />} text="Empleados" />
  }
];
