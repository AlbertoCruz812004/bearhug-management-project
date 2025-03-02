import { Card } from "@heroui/card"
import { Tooltip } from "@heroui/tooltip";
import { Cell, Pie, PieChart } from "recharts"

export const CircleChartCard = () => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Card>
      <PieChart accessibilityLayer width={200} height={200} >
        <Tooltip content={<CustomTooltip active label="d" payload={COLORS} />} />
        <Pie
          dataKey="value"
          data={data}
          innerRadius="68%"
          paddingAngle={-20}
          animationDuration={1000}
          animationEasing="ease"
          strokeWidth={0}
        >
          {
            data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))
          }
        </Pie>
      </PieChart>
    </Card >
  )
}

const CustomTooltip = ({ active, payload, label }: { active: boolean, payload: any[], label: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{label}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};
