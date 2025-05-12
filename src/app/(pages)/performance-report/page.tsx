"use client";
import { useState } from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "next-themes";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { allData } from "./data";

interface DataPoint {
  name: string;
  revenue: number;
}

export type YearlyData = {
  [key: string]: DataPoint[];
};

const allTimeData: DataPoint[] = [...allData["2024"], ...allData["2025"]];

export default function RevenueChart() {
  const [selectedYear, setSelectedYear] = useState<string>("All time");
  const { theme } = useTheme();
  const data: DataPoint[] =
    selectedYear === "All time" ? allTimeData : allData[selectedYear] || [];
  const totalRevenue: number = data.reduce(
    (acc, item) => acc + item.revenue,
    0
  );

  const textColor = theme === "dark" ? "#000" : "#000";

  return (
    <ContentLayout title="Chiến lược giao dịch">
      <Card className="max-h-[100vh] overflow-auto shadow-lg border border-black-200 dark:border-black-700">
        <CardContent className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-700">Total Revenue</h3>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Chọn năm" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All time">All time</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <h2
            className={`text-2xl font-bold ${
              totalRevenue >= 0 
                ? "text-green-500 dark:text-green-400" 
                : "text-red-500 dark:text-red-400"
            }`}
          >
            {totalRevenue}$
          </h2>
          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis 
                  dataKey="name" 
                  stroke={theme === "dark" ? "#fff" : "#000"}
                  tick={{ fill: theme === "dark" ? "#fff" : "#000" }}
                />
                <YAxis 
                  stroke={theme === "dark" ? "#fff" : "#000"}
                  tick={{ fill: theme === "dark" ? "#fff" : "#000" }}
                />
                <Tooltip 
                  formatter={(value) => `$${value}`}
                  contentStyle={{
                    backgroundColor: theme === "dark" ? "#fff" : "#fff",
                    color: "#000",
                    border: "none",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                  }}
                  labelStyle={{
                    color: "#000"
                  }}
                  itemStyle={{
                    color: "#000"
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke={theme === "dark" ? "#fff" : "#000"}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
