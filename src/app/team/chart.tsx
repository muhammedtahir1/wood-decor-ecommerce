"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { User } from "@prisma/client";

const chartConfig = {
  progress: {
    label: "progress",
  },
  faizan: {
    label: "Faizan",
    color: "hsl(var(--chart-1))",
  },
  tahir: {
    label: "Tahir",
    color: "hsl(var(--chart-2))",
  },
  Kupe: {
    label: "Kupe",
    color: "hsl(var(--chart-3))",
  },
  Liktha: {
    label: "Liktha",
    color: "hsl(var(--chart-4))",
  },
  Akshy: {
    label: "Akshy",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function Chart({ data }: { data: User[] }) {
  const chartData = [
    { browser: "faizan", progress: data[0].current_progress, fill: "#000" },
    {
      browser: "tahir",
      progress: data[1].current_progress,
      fill: "var(--color-safari)",
    },
    {
      browser: "Kupe",
      progress: data[2].current_progress,
      fill: "var(--color-firefox)",
    },
    {
      browser: "Liktha",
      progress: data[3].current_progress,
      fill: "var(--color-edge)",
    },
    {
      browser: "Akshy",
      progress: data[4].current_progress,
      fill: "var(--color-other)",
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Progress</CardTitle>
        <CardDescription>Aug - Sept 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="progress" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="progress" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Tahir is leading in <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total video progess of everyone
        </div>
      </CardFooter>
    </Card>
  );
}
