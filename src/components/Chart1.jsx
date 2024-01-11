import React from 'react';
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const opinionsCount = 48;
const percentageChange = 7;

const Chart1 = () => {
    // Example data (replace this with your actual data)
    const data = [
        { month: 'Jan', value: 50 },
        { month: 'Feb', value: 60 },
        { month: 'Mar', value: 55 },
        // Add more data points as needed
    ];

    return (
        <>
            <div>
                <h3 className='text-xl' >Positive Opinions</h3>
                <h5 className='text-sm'>{opinionsCount}</h5>
                <h6 className='text-xs'>{percentageChange > 0 ? `+${percentageChange}%` : `${percentageChange}%`}</h6>
            </div>
            {/* Bar Chart */}
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="transparent" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip />
                    <Bar dataKey="value" fill="#e2e8f0" />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}

export default Chart1;
