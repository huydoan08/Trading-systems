"use client";
import { useState } from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { allData } from "./data";
interface DataPoint {
  name: string;
  revenue: number;
}

export type YearlyData = {
  [key: string]: DataPoint[];
};

const allTimeData: DataPoint[] = [...allData["2024"], ...allData["2025"], ...allData["2026"]];

export default function RevenueChart() {
  const { theme } = useTheme();
  const [selectedYear, setSelectedYear] = useState<string>("All time");

  const data: DataPoint[] = selectedYear === "All time" ? allTimeData : allData[selectedYear] || [];
  const totalRevenue: number = data.reduce((acc, item) => acc + item?.revenue, 0);
  const textColor = theme === "dark" ? "#fff" : "#000";

  return (
    <ContentLayout title="Chiến lược giao dịch">
      <Card className="h-500 overflow-auto shadow-lg border border-black-200 dark:border-black-700">
        <CardContent className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Total Revenue
            </h3>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Chọn năm" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All time">All time</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2026">2026</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <h2 className={`text-2xl font-bold ${totalRevenue >= 0? "text-green-500 dark:text-green-400" : "text-red-500 dark:text-red-400"}`}>
            {totalRevenue}$
          </h2>
          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={theme === "dark" ? "#555" : "#ccc"}
                />
                <XAxis
                  dataKey="name"
                  stroke={textColor}
                  tick={{ fill: textColor }}
                />
                <YAxis stroke={textColor} tick={{ fill: textColor }} />
                <Tooltip
                  formatter={(value) => `$${value}`}
                  contentStyle={{
                    backgroundColor:"#fff",
                    color: "#000",
                    border: "none",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                  }}
                  labelStyle={{ color: "#000" }}
                  itemStyle={{ color: "#000" }}
                />
                <Bar
                  dataKey="revenue"
                  radius={[6, 6, 0, 0]}
                  animationDuration={800}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        entry.revenue >= 0
                          ? theme === "dark"
                            ? "#86efac"
                            : "#22c55e"
                          : theme === "dark"
                            ? "#f87171"
                            : "#ef4444"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
