import { Card } from "@heroui/card";
import { Tooltip } from "@heroui/tooltip";
import { color } from "framer-motion";
import { Cell, Pie, PieChart } from "recharts";

export const CircleChartCard = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="flex gap-3 w-[600px]">
      <Card>
        <PieChart accessibilityLayer width={150} height={150}>
          <Tooltip
            content={<CustomTooltip active label="d" payload={COLORS} />}
          />
          <Pie
            dataKey="value"
            data={data}
            innerRadius="68%"
            paddingAngle={-20}
            animationDuration={1000}
            animationEasing="ease"
            strokeWidth={0}
          >
            {data.map((_, index) =>
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            )}
          </Pie>
        </PieChart>
      </Card>
      <div className="flex w-full flex-col justify-center gap-4 p-4 text-tiny text-default-500 lg:p-0">
        {data.map((item, index) =>
          <div key={index} className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: `hsl(var(--heroui-${color}-${(index + 1) *
                  200}))`
              }}
            />
            <span className="capitalize">
              {item.name}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const CustomTooltip = ({
  active,
  payload,
  label
}: {
  active: boolean;
  payload: any[];
  label: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">
          {label}
        </p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};
