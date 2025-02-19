import { ArrowListIcon, ChartDownIcon, CheckIcon, EmployeeIcons, HomeIcon, ShoppingCartIcon } from "./icons";
import { TabLayout } from "./layouts/TabLayout";

export const options = [
  {
    key: "inicio",
    title: <TabLayout icon={<HomeIcon />} text="Inicio" />,
  },
  {
    key: "catalogo",
    title: <TabLayout icon={<ShoppingCartIcon />} text="Productos" />
  },
  {
    key: "categoria",
    title: <TabLayout icon={<ArrowListIcon />} text="Categoria" />
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
