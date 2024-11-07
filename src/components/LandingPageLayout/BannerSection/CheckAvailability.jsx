import React from 'react';

const CheckAvailability = () => {
    return (
        <div className='bg-[#53624E] grid md:grid-cols-2 lg:grid-cols-5 gap-5 text-white md:absolute lg:-bottom-14 md:-bottom-36 xl:left-20 lg:left-14 md:left-16 lg:right-14 md:right-10 px-5 py-8'>
            <input
                type="text"
                className='bg-transparent border border-[#B99D75] rounded-md p-3'
                placeholder='Check In' />

            <input
                type="text"
                className='bg-transparent border border-[#B99D75] rounded-md p-3'
                placeholder='Check Out' />
            <input
                type="text"
                className='bg-transparent border border-[#B99D75] rounded-md p-3'
                placeholder='Rooms' />
            <input
                type="text"
                className='bg-transparent border border-[#B99D75] rounded-md p-3'
                placeholder='Guest' />

            <button className='bg-[#B99D75] rounded-md md:col-span-2 lg:col-span-1 py-2 lg:py-0'>Check Availability</button>

        </div>
    );
};

export default CheckAvailability;