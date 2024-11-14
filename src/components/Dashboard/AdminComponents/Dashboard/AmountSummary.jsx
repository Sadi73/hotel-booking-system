'use client'

import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AmountSummary = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Render nothing on the server

    return (
        <div className="h-96 border rounded-lg shadow-xl p-5">
            <h2 className="font-bold mb-5">Amount Details</h2>
            <div className="flex justify-center">
                <PieChart width={250} height={170}>
                    <Pie
                        data={data}
                        cx={120}
                        cy={70}
                        innerRadius={60}
                        outerRadius={70}
                        fill="#8884d8"
                        paddingAngle={1}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>

            <div className='grid grid-cols-2 gap-5'>
                <div>
                    <p className=''>Paid Amound</p>
                    <p className='font-bold'>$33000</p>
                </div>
                <div>
                    <p className=''>Unpaid Amound</p>
                    <p className='font-bold'>$25000</p>
                </div>
                <div>
                    <p className=''>Paid Amound</p>
                    <p className='font-bold'>$33000</p>
                </div>
                <div>
                    <p className=''>Card Payment</p>
                    <p className='font-bold'>$11700</p>
                </div>
            </div>
        </div>
    );
};

export default AmountSummary;
