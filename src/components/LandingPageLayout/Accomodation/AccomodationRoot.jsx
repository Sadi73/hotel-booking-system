import React from 'react';
import AccomodationCarousel from './AccomodationCarousel';

const AccomodationRoot = () => {
    return (
        <div className='w-4/5 mx-auto my-20'>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='uppercase'>Enjoy World-class Stay Experience</p>
                    <h1 className='text-3xl'>The Accommodations</h1>
                </div>

                <button className='bg-[#ab916c] text-white px-5 py-3'>Discover All Suites</button>
            </div>

            <div className='my-10'>
                <AccomodationCarousel />
            </div>

        </div>
    );
};

export default AccomodationRoot;