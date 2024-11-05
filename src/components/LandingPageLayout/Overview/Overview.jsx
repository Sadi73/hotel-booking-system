import React from 'react';
import { FaHotel } from "react-icons/fa6";
import SwiperSection from './SwiperSection';


const Overview = () => {
    return (
        <div className='bg-[#F3F3F0] py-32 text-center'>
            <div className='flex justify-center'>
                <FaHotel className='text-3xl' />
            </div>
            <p className='uppercase'>Welcome to Cozystay Resort</p>

            <h1 className='text-5xl'>In the Heart of the South Pacific, Outstanding Views</h1>

            <p>Nestled in the heart of the Pacific Islands resort, on the edge of a tranquil and beautiful Garden Island, CozyStay is a haven of warmth, tranquility and rejuvenation. Bathed in brilliant sunshine and clear skies, it offers stunning views of palm-lined beaches and gorgeous coral reefs</p>

            <div className='mt-20 mb-10'>
                <SwiperSection />
            </div>

            <p>Inspired by our history, surrounded by nature and designed to
                offer a different experience</p>

        </div>
    );
};

export default Overview;