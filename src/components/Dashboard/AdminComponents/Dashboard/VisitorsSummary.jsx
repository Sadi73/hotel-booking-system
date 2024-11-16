'use client'
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '9 am',
        Today: 34,
        Yesterday: 25,
    },
    {
        name: '10 am',
        Today: 78,
        Yesterday: 55,
    },
    {
        name: '11 am',
        Today: 15,
        Yesterday: 70,
    },
    {
        name: '12 pm',
        Today: 75,
        Yesterday: 39,
    },
    {
        name: '1 pm',
        Today: 30,
        Yesterday: 39,
    }
];

const VisitorsSummary = () => {
    return (
        <div className='h-96 border rounded-lg shadow-xl p-5'>
            <h2 className='font-bold text-black mb-5'>Visitors Over Time</h2>

            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
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
                    <Legend />
                    <Line type="monotone" dataKey="Yesterday" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Today" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default VisitorsSummary;