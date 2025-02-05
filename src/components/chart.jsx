import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const CircularChartComponent = ({ emi, totalInterest, totalPayment }) => {
  const data = [
    { name: 'EMI', value: emi },
    { name: 'Total Interest', value: totalInterest },
    { name: 'Total Payment', value: totalPayment },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div>
      <h2 className="chart-title">EMI Calculation Breakdown</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default CircularChartComponent;
