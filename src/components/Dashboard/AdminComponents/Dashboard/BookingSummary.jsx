'use client'
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '1/11/24',
        noOfBooking: 20
    },
    {
        name: '2/11/24',
        noOfBooking: 34
    },
    {
        name: '3/11/24',
        noOfBooking: 25
    },
    {
        name: '4/11/24',
        noOfBooking: 40
    },
    {
        name: '5/11/24',
        noOfBooking: 15
    },
    {
        name: '6/11/24',
        noOfBooking: 45
    },
    {
        name: '7/11/24',
        noOfBooking: 50
    },
];


const BookingSummary = () => {
    return (
        <div className='h-96 border rounded-lg shadow-xl p-5'>
            <h2 className='font-bold '>Booking Details</h2>
            <p className='text-sm mb-5'>Total Booking Report </p>

            <ResponsiveContainer width="100%" height="80%">
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="noOfBooking" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BookingSummary;