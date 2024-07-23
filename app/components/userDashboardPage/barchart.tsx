"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../ui/chart";

const chartData = [
    { month: "January", desktop: 4500, price: "$6000" },
    { month: "February", desktop: 3300, price: "$4500" },
    { month: "March", desktop: 1500, price: "$3000" },
    { month: "April", desktop: 5500, price: "$1500" },
    { month: "May", desktop: 1500, price: "$0" },
    { month: "June", desktop: 5500 },
    { month: "July", desktop: 1500 },
    { month: "August", desktop: 4000 },
    { month: "September", desktop: 1000 },
    { month: "October", desktop: 2000 },
    { month: "November", desktop: 800 },
    { month: "December", desktop: 4500 },
];

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#F97316",
    },
    mobile: {
        label: "Mobile",
        color: "#F97316",
    },
} satisfies ChartConfig;

export default function BarComponent() {
    return (
        <ChartContainer
            config={chartConfig}
            className="min-h-[300px] w-full p-3 shadow-none"
        >
            <BarChart
                accessibilityLayer
                data={chartData}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                    className="text-sm font-medium"
                    dataKey="month"
                    tickLine={false}
                    tickMargin={5}
                    tickSize={1}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                    className="text-sm font-medium"
                    tickCount={5}
                    tickLine={false}
                    tickMargin={5}
                    tickSize={30}
                    axisLine={false}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                    dataKey="desktop"
                    fill="#F97316"
                    radius={4}
                    width={20}
                    barSize={300}
                />
            </BarChart>
        </ChartContainer>
    );
}
