'use client';

import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    {
        month: 'Jan',
        amonut: 38500,
    },
    {
        month: 'Feb',
        amonut: 56000,
    },
    {
        month: 'Mar',
        amonut: 62000,
    },
    {
        month: 'April',
        amonut: 25000,
    },
    {
        month: 'May',
        amonut: 47000,
    },
    {
        month: 'June',
        amonut: 35000,
    },
    {
        month: 'July',
        amonut: 78000,
    },
    {
        month: 'Aug',
        amonut: 33000,
    },
    {
        month: 'Sep',
        amonut: 40000,
    },
    {
        month: 'Oct',
        amonut: 52000,
    },
    {
        month: 'Nov',
        amonut: 90000,
    },
    {
        month: 'Dec',
        amonut: 78000,
    },
];

const RevenueSummary = () => {
    return (
        <div className='h-96 border rounded-lg shadow-xl p-5'>
            <h2 className='text-black font-bold mb-5'>Total Revenue</h2>

            <ResponsiveContainer width="100%" height="90%">
                <BarChart
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
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amonut" fill="#DC956F" activeBar={<Rectangle fill="#8884d8" stroke="blue" />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RevenueSummary;