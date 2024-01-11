import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { category: 'Service', currentPercentage: 3.3, addedPercentage: 2 },
  { category: 'Quantité', currentPercentage: 45, addedPercentage: 5 },
  { category: 'Ambiance', currentPercentage: 34, addedPercentage: 3 },
  { category: 'Prix', currentPercentage: 85, addedPercentage: 7 },
];

const Chart3 = () => {
  return (
    <ResponsiveContainer >
      <BarChart
        width={200}
        height={800}
        data={data}
        margin={{ top: 20, right: 10, left: 20, bottom: 10 }}
        layout="vertical"
      >
        {/* Remove CartesianGrid */}
        <XAxis type="number" domain={[0, 100]} />
        <YAxis dataKey="category" type="category" />
        <Tooltip />
        <Bar
          dataKey="currentPercentage"
          fill="#A1A3F7"
          stackId="stack"
          barSize={20}
          barGap={5}
          barCategoryGap={5}
          shape="round"
        />
        <Bar
          dataKey="addedPercentage"
          fill="#4285F4"
          stackId="stack"
          barSize={20}
          barGap={5}
          barCategoryGap={5}
          shape="round"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart3;
