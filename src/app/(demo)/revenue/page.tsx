"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "04-08/2024", revenue: 700 },
  { name: "09/2024", revenue: -183 },
  { name: "10/2024", revenue: -890 },
  { name: "11/2024", revenue: 650 },
  { name: "12/2024", revenue: -3124 },
  { name: "01/2025", revenue: -1018 },
  { name: "02/2025", revenue: -129 },
  { name: "03/2025", revenue: -16 },
];

const totalRevenue = data.reduce((acc, item) => acc + item.revenue, 0);

export default function RevenueChart() {
  return (
    <ContentLayout title="Chiến lược giao dịch">
      <Card className="max-h-[100vh] overflow-auto shadow-lg border border-black-200 dark:border-black-700">
        <CardContent className="p-6 space-y-4">
          <Card className="w-full h-full max-w-sm p-4">
            <h3 className="text-sm font-medium text-gray-500">Total Revenue (2025)</h3>
            <h2 className="text-2xl font-bold">{totalRevenue}</h2>
            <CardContent className="p-0 mt-2">
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data}>
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <Tooltip formatter={(value) => `$${value}`} />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#000"
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
