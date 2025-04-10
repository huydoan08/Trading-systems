import React from 'react';
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent } from '../ui/card';
import { dataStatistic } from '@/data/data';

const BarChartComponent = () => {
  return (
    <Card className="w-full flex flex-col items-start shadow-lg border border-black-200 dark:border-black-700 p-4 h-[420px]">
      <CardContent className="space-y-2">
        <div style={{ width: 500, height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={dataStatistic}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey="name" height={30} stroke="#8884d8" />
          <Bar dataKey="profit" fill="#82ca9d" />
          <Bar dataKey="loss" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarChartComponent;
