import React from 'react';
import roomImage1 from '../../../assets/room2.jpg';
import roomImage2 from '../../../assets/room3.jpg';
import Image from 'next/image';

const page = () => {
    return (
        <div className='min-w-[1000px] overflow-auto space-y-3'>
            <div className='grid grid-cols-12 gap-5 px-5 font-bold'>
                <p className=''>Image</p>
                <p className='col-span-2'>Room Name</p>
                <p className='col-span-2'>Booked By</p>
                <p className='col-span-2'>Dates</p>
                <p className='col-span-2'>Guests</p>
                <p className=''>Status</p>
                <p className='col-span-2 text-center'>Actions</p>
            </div>

            <hr/>

            <div className='grid grid-cols-12 gap-5 items-center border rounded-lg p-5 text-sm'>
                <Image src={roomImage1} alt='room image' width={100} height={100} />
                <p className='col-span-2'>Delux Room</p>
                <p className='col-span-2'>Raihan Alam</p>
                <p className='col-span-2'>12 November, 2024</p>
                <p className='col-span-2'>2 Adults, 1 Child</p>
                <p className='text-yellow-500'>Pending</p>
                <div className='col-span-2 flex gap-2 items-start'>
                    <button className='bg-green-700 text-white px-3 py-1 rounded-md'>Approve</button>
                    <button className='bg-red-700 text-white px-3 py-1 rounded-md'>Reject</button>
                </div>
            </div>

            <div className='grid grid-cols-12 gap-5 items-center border rounded-lg p-5 text-sm'>
                <Image src={roomImage2} alt='room image' width={100} height={100} />
                <p className='col-span-2'>Premium Cottage</p>
                <p className='col-span-2'>Nafia Sultana</p>
                <p className='col-span-2'>12 November, 2024</p>
                <p className='col-span-2'>2 Adults, 1 Child</p>
                <p className='text-green-500'>Approved</p>
                {/* <div className='col-span-2 flex gap-2 items-start'>
                    <button className='bg-green-700 text-white px-3 py-1 rounded-md'>Approve</button>
                    <button className='bg-red-700 text-white px-3 py-1 rounded-md'>Reject</button>
                </div> */}
            </div>
        </div>
    );
};

export default page;