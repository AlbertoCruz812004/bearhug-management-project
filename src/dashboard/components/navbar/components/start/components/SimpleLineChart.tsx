import { Card, CardBody } from "@heroui/card";
import {
  LineChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

const data = [
  {
    name: "Electronica",
    year: 4000,
    month: 2400,
    week: 2500,
  },
  {
    name: "Ropa",
    year: 3000,
    mounth: 1398,
    week: 2210,
  },
  {
    name: "Carnes Frias",
    year: 2000,
    mounth: 9800,
    week: 2290,
  },
  {
    name: "Licores",
    year: 2780,
    mounth: 3908,
    week: 2000,
  },
  {
    name: "Electrodomesticos",
    year: 1890,
    mounth: 4800,
    week: 2181,
  },
  {
    name: "Ferreteria",
    year: 2390,
    mounth: 3800,
    week: 2500,
  },
  {
    name: "Medicamentos",
    year: 3490,
    mounth: 4300,
    week: 2100,
  },
];

export const SimpleLineChart = ({ className }: { className?: string }) => {
  return (
    <Card className={`w-full h-[270px] ${className}`}>
      <CardBody>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="year"
              stroke="#006FEE"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="mounth" stroke="#17C964" />
            <Line type="monotone" dataKey="week" stroke="#F31260" />
          </LineChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
};
