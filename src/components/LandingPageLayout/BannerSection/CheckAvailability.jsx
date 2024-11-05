import React from 'react';

const CheckAvailability = () => {
    return (
        <div className=' w-4/5 mx-auto '>
            <div className='bg-[#53624E] px-5 py-8 grid grid-cols-5 gap-5 text-white absolute sadi -bottom-14 -'>
                <input
                    type="text"
                    className='bg-transparent border border-[#B99D75] p-3'
                    placeholder='Check In' />

                <input
                    type="text"
                    className='bg-transparent border border-[#B99D75] p-3'
                    placeholder='Check Out' />
                <input
                    type="text"
                    className='bg-transparent border border-[#B99D75] p-3'
                    placeholder='Rooms' />
                <input
                    type="text"
                    className='bg-transparent border border-[#B99D75] p-3'
                    placeholder='Guest' />

                <button className='bg-[#B99D75]'>Check Availability</button>

            </div>
        </div>
    );
};

export default CheckAvailability;