import React from 'react';
import { FaRegCalendarAlt, FaRegCalendarCheck } from "react-icons/fa";


const ReservationSummary = () => {
    return (
        <div className='border rounded-lg shadow-xl px-5 py-5'>
            <h3 className='text-center text-black font-bold mb-5'>Reservation Details</h3>

            <div className='grid grid-cols-4'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <FaRegCalendarCheck className='text-gray-500'/>
                    <p className='text-xl text-black font-bold'>50</p>
                    <h6 className='text-sm text-gray-500'>Booking</h6>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <FaRegCalendarAlt className='text-gray-500'/>
                    <p className='text-xl text-black font-bold'>28</p>
                    <h6 className='text-sm text-gray-500'>Check In</h6>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <FaRegCalendarCheck className='text-gray-500'/>
                    <p className='text-xl text-black font-bold'>14</p>
                    <h6 className='text-sm text-gray-500'>Check Out</h6>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <FaRegCalendarCheck className='text-gray-500'/>
                    <p className='text-xl text-black font-bold'>35</p>
                    <h6 className='text-sm text-gray-500'>Stay Now</h6>
                </div>
            </div>

        </div>
    );
};

export default ReservationSummary;