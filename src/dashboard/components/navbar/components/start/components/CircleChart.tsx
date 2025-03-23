import { ButtonProps } from "@heroui/button";
import { CardProps, Card } from "@heroui/card";
import { cn } from "@heroui/theme";
import React from "react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts";

type ChartData = {
  name: string;
  [key: string]: string | number;
};

type CircleChartProps = {
  title: string;
  color: ButtonProps["color"];
  categories: string[];
  chartData: ChartData[];
};

const data: CircleChartProps[] = [
  {
    title: "Categorias con Mayor valor",
    categories: ["Electronica", "Electrodomesticos", "Ropa", "Alimentos"],
    color: "primary",
    chartData: [
      { name: "Electronica", value: 4900 },
      { name: "Electrodomesticos", value: 5300 },
      { name: "Ropa", value: 1200 },
      { name: "Alimentos", value: 900 },
    ],
  },
  {
    title: "Productos con bajo rendimiento",
    categories: ["Camisas Tipo Polo", "Zapatos Formales", "Tablet", "Smart TV"],
    color: "success",
    chartData: [
      { name: "Camisas Tipo Polo", value: 450 },
      { name: "Zapatos Formales", value: 300 },
      { name: "Tablet", value: 250 },
      { name: "Smart TV", value: 200 },
    ],
  },
  {
    title: "Productos más movidos",
    categories: [
      "Camisa Casual",
      "Tenis Deportivos",
      "Mochilas Escolares",
      "Auriculares JBL",
    ],
    color: "danger",
    chartData: [
      { name: "Camisa Casual", value: 350 },
      { name: "Tenis Deportivos", value: 280 },
      { name: "Mochilas Escolares", value: 220 },
      { name: "Auriculares JBL", value: 150 },
    ],
  },
];

export default function Component() {
  return (
    <dl className="grid w-[1000px] grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
      {data.map((item, index) => (
        <CircleChartCard key={index} {...item} />
      ))}
    </dl>
  );
}

const formatTotal = (total: number) => {
  return total >= 1000 ? `${(total / 1000).toFixed(1)}K` : total;
};

const CircleChartCard = React.forwardRef<
  HTMLDivElement,
  Omit<CardProps, "children"> & CircleChartProps
>(({ className, title, categories, color, chartData, ...props }, ref) => {
  return (
    <Card
      ref={ref}
      className={cn(
        "min-h-[240px] border border-transparent dark:border-default-100",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-y-2 p-4 pb-0">
        <dt>
          <h3 className="text-small font-medium text-default-500">{title}</h3>
        </dt>
      </div>
      <div className="flex h-full flex-wrap items-center justify-center gap-x-2 lg:flex-nowrap">
        <ResponsiveContainer
          className="[&_.recharts-surface]:outline-none"
          height={200}
          width="100%"
        >
          <PieChart
            accessibilityLayer
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <Tooltip
              content={({ label, payload }) => (
                <div className="flex h-8 min-w-[120px] items-center gap-x-2 rounded-medium bg-background px-1 text-tiny shadow-small">
                  <span className="font-medium text-foreground">{label}</span>
                  {payload?.map((p, index) => {
                    const name = p.name;
                    const value = p.value;
                    const category =
                      categories.find((c) => c.toLowerCase() === name) ?? name;

                    return (
                      <div
                        key={`${index}-${name}`}
                        className="flex w-full items-center gap-x-2"
                      >
                        <div
                          className="h-2 w-2 flex-none rounded-full"
                          style={{
                            backgroundColor: `hsl(var(--heroui-${color}-${
                              (index + 1) * 200
                            }))`,
                          }}
                        />
                        <div className="flex w-full items-center justify-between gap-x-2 pr-1 text-xs text-default-700">
                          <span className="text-default-500">{category}</span>
                          <span className="font-medium text-default-700">
                            {formatTotal(value as number)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              cursor={false}
            />
            <Pie
              animationDuration={1000}
              animationEasing="ease"
              data={chartData}
              dataKey="value"
              innerRadius="68%"
              nameKey="name"
              paddingAngle={-20}
              strokeWidth={0}
            >
              {chartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`hsl(var(--heroui-${color}-${(index + 1) * 200}))`}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="flex w-full flex-col justify-center gap-4 p-4 text-tiny text-default-500 lg:p-0">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: `hsl(var(--heroui-${color}-${
                    (index + 1) * 200
                  }))`,
                }}
              />
              <span className="capitalize">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
});

CircleChartCard.displayName = "CircleChartCard";
