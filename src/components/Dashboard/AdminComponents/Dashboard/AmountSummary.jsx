'use client'

import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
    { name: 'Paid Amount', value: 400 },
    { name: 'Unpaid Amount', value: 300 },
    { name: 'Promo Code', value: 300 },
    { name: 'Cash Payment', value: 200 },
];

const COLORS = ['#7D74C6', '#DC956F', '#DC6F6A', '#69C9B8'];

const AmountSummary = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Render nothing on the server

    return (
        <div className="h-96 border rounded-lg shadow-xl p-5">
            <h2 className="font-bold text-black mb-5">Amount Details</h2>
            <div className="flex justify-center relative">
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

                <div className='absolute top-12 text-center text-black'>
                    <p>Total Amount</p>
                    <p className='font-bold'>$33000</p>
                </div>
            </div>



            <div className='grid grid-cols-2 gap-5 px-10'>
                <div className='text-[#7D74C6]'>
                    <p className=''>Paid Amount</p>
                    <p className='font-bold'>$33000</p>
                </div>
                <div className='text-[#DC6F6A]'>
                    <p className=''>Unpaid Amount</p>
                    <p className='font-bold'>$25000</p>
                </div>
                <div className='text-[#DC956F]'>
                    <p className=''>Promo Code</p>
                    <p className='font-bold'>$33000</p>
                </div>
                <div className='text-[#69C9B8]'>
                    <p className=''>Card Payment</p>
                    <p className='font-bold'>$11700</p>
                </div>
            </div>
        </div>
    );
};

export default AmountSummary;
