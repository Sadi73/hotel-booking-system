'use client';

import Config from '@/Config';
import { authContext } from '@/Providers/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';
import roomImage1 from '../../../assets/room2.jpg';
import Image from 'next/image';

const page = () => {

    const { authInfo } = useContext(authContext);
    const [myBookings, setMyBookings] = useState([]);

    useEffect(() => {
        fetch(`${Config.baseApi}/my-reservations?email=${authInfo?.email}`)
            .then(res => res.json())
            .then(data => setMyBookings(data?.data))
    }, []);

    return (
        <>
            {myBookings?.length > 0 ?
                <div className='min-w-[1000px] overflow-auto space-y-3'>
                    <div className='grid grid-cols-6 gap-5 px-5 font-bold'>
                        <p className=''>Image</p>
                        <p className=''>Room Name</p>
                        {/* <p className=''>Booked By</p> */}
                        <p className=''>Dates</p>
                        <p className=''>Guests</p>
                        <p className=''>Status</p>
                        <p className=' '>Actions</p>
                    </div>

                    <hr />

                    {myBookings.map(booking =>
                        <div key={booking?._id} className='grid grid-cols-6 gap-5 items-center border rounded-lg p-5 text-sm'>
                            <Image src={roomImage1} alt='room image' width={100} height={100} />
                            <p className=''>Delux Room</p>
                            {/* <p className=''>Raihan Alam</p> */}
                            <p className=''>12 November, 2024</p>
                            <p className=''>2 Adults, 1 Child</p>
                            <p className='text-yellow-500'>Pending</p>
                            <button className='bg-red-700 text-white px-3 py-1 rounded-md'>Cancel</button>
                        </div>
                    )}



                </div>
                : <p>You have no bookings</p>}

        </>
    );
};

export default page;