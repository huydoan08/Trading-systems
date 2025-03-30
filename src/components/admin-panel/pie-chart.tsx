import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { innerData, outerData } from "@/data/data";


const COLORS_INNER = ["#6E64C1", "#6E64C1"];
const COLORS_OUTER = Array(outerData.length).fill("#80C9A9");

const CustomLabel = ({ x, y, value }: any) => {
  return (
    <text
      x={x}
      y={y}
      fill="#80C9A9"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={14}
    >
      {value}
    </text>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0];
    const isInnerCircle = innerData.some((item) => item.name === name);
    return (
      <div style={{ background: "#fff", padding: "5px", border: "1px solid #ccc" }}>
        <p>{isInnerCircle ? `Month: ${name} PNL: ${value}` : value}</p>
      </div>
    );
  }
  return null;
};

const NestedPieChart = () => {
  return (
    <Card className="w-full flex flex-col items-start shadow-lg border border-black-200 dark:border-black-700 p-4 h-[420px]">
      <CardContent className="space-y-2">
        <div style={{ width: 500, height: 400 }}>
          <ResponsiveContainer>
            <PieChart>
              {/* Custom Tooltip */}
              <Tooltip content={<CustomTooltip />} />

              {/* Vòng tròn trong */}
              <Pie
                data={innerData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius={70}
                startAngle={0}
                endAngle={360}
              >
                {innerData.map((entry, index) => (
                  <Cell key={`cell-inner-${index}`} fill={COLORS_INNER[index]} stroke="white" strokeWidth={2} />
                ))}
              </Pie>

              {/* Vòng tròn ngoài */}
              <Pie
                data={outerData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={110}
                labelLine={false}
                label={({ cx, cy, midAngle, outerRadius, value }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = outerRadius + 10;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);
                  return <CustomLabel x={x} y={y} value={value} />;
                }}
              >
                {outerData.map((entry, index) => (
                  <Cell key={`cell-outer-${index}`} fill={COLORS_OUTER[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default NestedPieChart;
