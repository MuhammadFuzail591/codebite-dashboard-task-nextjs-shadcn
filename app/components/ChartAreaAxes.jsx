"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
} from "../../components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart"

export const description = "An area chart with axes"

const chartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
  { month: "Jul", desktop: 300, mobile: 140 },
  { month: "Aug", desktop: 250, mobile: 300 },
  { month: "Sep", desktop: 214, mobile: 140 },
  { month: "Nov", desktop: 214, mobile: 140 },
  { month: "Dec", desktop: 214, mobile: 140 },


]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
}

export function ChartAreaAxes() {
  return (
    <Card className="lg:w-[65%] w-full p-2 mx-auto ">
      <CardHeader className="font-bold text-md">Statistics</CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-[14rem] !aspect-auto"  >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: -20,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} stroke="rgba(0, 0, 0, 0.13" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
              stroke="#fff"

            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={4}
              tickCount={4}

              stroke="#fff"
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey="mobile"
              type="natural"
              fill="none"

              stroke="#3DBE00"
              strokeWidth={2}
              stackId="a"
            />

          </AreaChart>
        </ChartContainer>
      </CardContent>

    </Card>
  )
}
