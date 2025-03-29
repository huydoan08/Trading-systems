import { Bar, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend, ComposedChart } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { dataChart } from "@/data/data";

export default function BarLineChart() {
  return (
    <Card className="w-full p-2 h-[420px]">
      <h2 className="text-lg font-semibold">Reward chart</h2>
      <CardContent className="mt-4">
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={dataChart}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#000080" barSize={40} />
            <Line type="monotone" dataKey="uv" stroke="#FF6600" strokeWidth={2} dot={{ fill: "#FF6600" }} />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}