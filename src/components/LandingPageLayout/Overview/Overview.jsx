import React from 'react';
import { RiHotelLine } from "react-icons/ri";
import SwiperSection from './SwiperSection';


const Overview = () => {
    return (
        <div className='bg-[#F3F3F0] py-20 md:pt-48 md:pb-28 lg:py-28 text-center'>
            <div className='flex justify-center mb-3'>
                <RiHotelLine className='text-2xl md:text-5xl text-[#53624e]' />
            </div>

            <div className='lg:w-3/4 md:w-4/5 mx-auto space-y-4'>
                <p className='uppercase font-serif text-sm text-[#53624e]'>Welcome to Cozystay Resort</p>

                <h1 className='text-2xl md:text-5xl font-mono font-semibold md:font-normal leading-normal'>In the Heart of the South Pacific, Outstanding Views</h1>

                <p className='text-sm md:text-lg font-serif leading-loose'>Nestled in the heart of the Pacific Islands resort, on the edge of a tranquil and beautiful Garden Island, CozyStay is a haven of warmth, tranquility and rejuvenation. Bathed in brilliant sunshine and clear skies, it offers stunning views of palm-lined beaches and gorgeous coral reefs</p>
            </div>

            <div className='mt-20'>
                <SwiperSection />
            </div>

            <p className='mt-16 text-xl font-mono'>Inspired by our history, surrounded by nature and designed to
                offer a different experience</p>

        </div>
    );
};

export default Overview;