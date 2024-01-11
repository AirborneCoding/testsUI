import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

// const data = [
//     { month: 'Jan', positiveReviews: 10 },
//     { month: 'Feb', positiveReviews: 15 },
//     { month: 'Mar', positiveReviews: 20 },
//     { month: 'Apr', positiveReviews: 25 },
//     { month: 'May', positiveReviews: 30 },
//     { month: 'Jun', positiveReviews: 35 },
//     { month: 'Jul', positiveReviews: 40 },
//     { month: 'Aug', positiveReviews: 45 },
//     { month: 'Sep', positiveReviews: 50 },
//     { month: 'Oct', positiveReviews: 55 },
//     { month: 'Nov', positiveReviews: 60 },
//     { month: 'Dec', positiveReviews: 65 },
// ];

const data = [
    // { month: 'Jan', positiveReviews: 0 },
    // { month: 'Feb', positiveReviews: 1 },
    // { month: 'Mar', positiveReviews: 1.5 },
    { month: 'Apr', positiveReviews: 4 },
    { month: 'May', positiveReviews: 3.8 },
    { month: 'Jun', positiveReviews: 3.8 },
    { month: 'Jul', positiveReviews: 5 },
    { month: 'Aug', positiveReviews: 3 },
    { month: 'Sep', positiveReviews: 3.2 },
    { month: 'Oct', positiveReviews: 3.5 },
    { month: 'Nov', positiveReviews: 3 },
    { month: 'Dec', positiveReviews: 3.2 },
];

const currentMonth = new Date().getMonth(); // Get the current month (0-indexed)


const PositiveReviewsLineChart = () => {
    return (
        <ResponsiveContainer width="100%" height={300} >
            <LineChart
                // width={600}
                // height={300}
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
            >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='month' />
                <YAxis />
                <Tooltip />
                <Line
                    type='monotone'
                    dataKey='positiveReviews'
                    stroke='#3182bd' // Blue color for the line
                    dot={currentMonth === 11 ? { stroke: '#3182bd', strokeWidth: 2 } : false} // Display a dot for the current month (December)
                />
            </LineChart>
        </ResponsiveContainer >
    );
}

export default PositiveReviewsLineChart;

// ResponsiveContainer width="100%" height={300}

/* 
version2


import React from 'react';
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area } from 'recharts';

const data = [
  { month: 'Jan', positiveReviews: 10 },
  { month: 'Feb', positiveReviews: 15 },
  { month: 'Mar', positiveReviews: 20 },
  { month: 'Apr', positiveReviews: 25 },
  { month: 'May', positiveReviews: 30 },
  { month: 'Jun', positiveReviews: 35 },
  { month: 'Jul', positiveReviews: 40 },
  { month: 'Aug', positiveReviews: 45 },
  { month: 'Sep', positiveReviews: 50 },
  { month: 'Oct', positiveReviews: 55 },
  { month: 'Nov', positiveReviews: 60 },
  { month: 'Dec', positiveReviews: 65 },
];

const PositiveReviewsAreaChart = () => {
  return (
    <ResponsiveContainer width="50%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="positiveReviews" fill="#3B3F44" stroke="#3B3F44" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default PositiveReviewsAreaChart;

*/