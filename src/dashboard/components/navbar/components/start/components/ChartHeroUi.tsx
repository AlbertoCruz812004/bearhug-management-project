"use client";

import { Button, type ButtonProps } from "@heroui/button";
import { Card } from "@heroui/card";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/dropdown";
import { cn } from "@heroui/theme";
import React from "react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts";
import { TaskIcon } from "./TaskIcon";

export type ChartData = {
  [key: string]: string | number;
};

export type CircleChartProps = {
  title: string;
  color: ButtonProps["color"];
  categories: string[];
  chartData: ChartData[];
  dataKey?: string;
  nameKey?: string;
  className?: string;
  onSelectTimeRange?: (selected: string) => void;
  onMenuAction?: (action: string) => void;
};

const formatTotal = (total: number) => {
  return total >= 1000 ? `${(total / 1000).toFixed(1)}K` : total;
};

const getColor = (color: string, index: number) =>
  `hsl(var(--heroui-${color}-${(index + 1) * 200}))`;

const CustomTooltip = ({ payload, label, categories, color }: any) => {
  if (!payload || !payload.length) return null;

  return (
    <div className="flex h-8 min-w-[120px] items-center gap-x-2 rounded-medium bg-background px-1 text-tiny shadow-small">
      <span className="font-medium text-foreground">{label}</span>
      {payload.map((p: any, index: number) => {
        const name = p.name;
        const value = p.value;
        const category = categories.find((c: any) => c.toLowerCase() === name) ?? name;

        return (
          <div key={`${index}-${name}`} className="flex w-full items-center gap-x-2">
            <div
              className="h-2 w-2 flex-none rounded-full"
              style={{ backgroundColor: getColor(color, index) }}
            />
            <div className="flex w-full items-center justify-between gap-x-2 pr-1 text-xs text-default-700">
              <span className="text-default-500">{category}</span>
              <span className="font-mono font-medium text-default-700">
                {formatTotal(value)}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const CircleChart = React.forwardRef<HTMLDivElement, CircleChartProps>(
  (
    {
      className,
      title,
      categories,
      color = "primary",
      chartData,
      dataKey = "value",
      nameKey = "name",
      onSelectTimeRange,
      onMenuAction,
      ...props
    },
    ref
  ) => {
    const handleMenuAction = (key: React.Key) => {
      onMenuAction?.(key.toString());
    };

    return (
      <Card
        ref={ref}
        className={cn(
          "min-h-[240px] border border-transparent dark:border-default-100",
          className
        )}
        {...props}
      >
        {/* Header */}
        <div className="flex flex-col gap-y-2 p-4 pb-0">
          <div className="flex items-center justify-between gap-x-2">
            <dt>
              <h3 className="text-small font-medium text-default-500">{title}</h3>
            </dt>
            <Dropdown classNames={{ content: "min-w-[120px]" }} placement="bottom-end">
              <DropdownTrigger>
                <Button isIconOnly radius="full" size="sm" variant="light">
                  <TaskIcon />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                itemClasses={{ title: "text-tiny" }}
                variant="flat"
                onAction={handleMenuAction}
              >
                <DropdownItem key="view-details">View Details</DropdownItem>
                <DropdownItem key="export-data">Export Data</DropdownItem>
                <DropdownItem key="set-alert">Set Alert</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        {/* Chart */}
        <div className="flex h-full flex-wrap items-center justify-center gap-x-2 lg:flex-nowrap">
          <ResponsiveContainer className="[&_.recharts-surface]:outline-none" height={200} width="100%">
            <PieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <Tooltip
                content={
                  <CustomTooltip payload={chartData} categories={categories} color={color} />
                }
                cursor={false}
              />
              <Pie
                animationDuration={1000}
                animationEasing="ease"
                data={chartData}
                dataKey={dataKey}
                nameKey={nameKey}
                innerRadius="68%"
                paddingAngle={-20}
                strokeWidth={0}
              >
                {chartData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={getColor(color, index)} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div className="flex w-full flex-col justify-center gap-4 p-4 text-tiny text-default-500 lg:p-0">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: getColor(color, index) }}
                />
                <span className="capitalize">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    );
  }
);

CircleChart.displayName = "CircleChart";
