import { CreateProduct } from "./components/createProduct/CreateProduct";
import { Inventory } from "./components/inventory/Inventory";
import { Start } from "./components/start/Start";
import { ArrowListIcon, BoxPlusIcon, ChartDownIcon, CheckIcon, EmployeeIcons, HomeIcon, ShoppingCartIcon } from "./icons";
import { TabLayout } from "./layouts/TabLayout";

export const options = [
  {
    key: "inicio",
    title: <TabLayout icon={<HomeIcon />} text="Inicio" />,
    element: <Start />
  },
  {
    key: "inventory",
    title: <TabLayout icon={<ShoppingCartIcon />} text="Inventario" />,
    element: <Inventory />
  },
  {
    key: "categoria",
    title: <TabLayout icon={<ArrowListIcon />} text="Categoria" />
  },
  {
    key: "agregar",
    title: <TabLayout icon={<BoxPlusIcon />} text="Agregar Producto" />,
    element: <CreateProduct />
  },
  {
    key: "stock",
    title: <TabLayout icon={<ChartDownIcon />} text="Stock Bajo" />
  },
  {
    key: "disponibilidad",
    title: <TabLayout icon={<CheckIcon />} text="Disponibilidad" />
  },
  {
    key: "empleados",
    title: <TabLayout icon={<EmployeeIcons />} text="Empleados" />
  }
]
