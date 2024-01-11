import React from 'react';
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { IoMdChatbubbles } from "react-icons/io";

const opinionsCount = 48;
const percentageChange = 7;

const Chart1 = () => {

    const data = [
        { month: 'Jan', value: 50 },
        { month: 'Feb', value: 60 },
        { month: 'Mar', value: 55 },
        { month: 'Jan', value: 50 },
        { month: 'Feb', value: 60 },
        { month: 'Mar', value: 55 },
        // Add more data as needed
    ];

    return (
        <>
            <div>
                <h3 className='text-xl flex items-center' >
                    Positive Opinions
                    <IoMdChatbubbles className='text-blue-700 ml-2' />
                </h3>
                <h5 className='text-sm'>{opinionsCount}</h5>
                <h6 className='text-xs'>{percentageChange > 0 ? `+${percentageChange}%` : `${percentageChange}%`}</h6>
            </div>
            {/* Bar Chart */}
            <ResponsiveContainer width="100%" height={200} >
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="transparent" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip />
                    <Bar dataKey="value" fill="#e2e8f0" barSize={50} />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}

export default Chart1;
