import React from 'react';
import AccomodationCarousel from './AccomodationCarousel';
import Link from 'next/link';

const AccomodationRoot = () => {
    return (
        <div className='w-4/5 mx-auto my-20'>
            <div className='flex justify-between items-center'>
                <div className='space-y-2'>
                    <p className='uppercase font-mono text-sm text-[#53624e]'>Enjoy World-class Stay Experience</p>
                    <h1 className='text-3xl md:text-3xl lg:text-4xl font-serif'>The Accommodations</h1>
                </div>

                <Link href='/all-rooms' className='hidden md:block bg-[#ab916c] text-white font-serif px-5 py-3'>Discover All Suites</Link>
            </div>

            <div className='my-10'>
                <AccomodationCarousel />
            </div>

            <Link href='/all-rooms' className='md:hidden bg-[#ab916c] text-white font-serif px-5 py-3 w-full'>Discover All Suites</Link>

        </div>
    );
};

export default AccomodationRoot;