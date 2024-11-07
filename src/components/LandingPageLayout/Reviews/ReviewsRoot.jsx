import React from 'react';
import ReviewCarousel from './ReviewCarousel';
import { VscPreview } from "react-icons/vsc";

const ReviewsRoot = () => {
    return (
        <div className='space-y-5 '>
            <div className='flex justify-center'>
                <VscPreview className='text-4xl text-[#53624e]' />
            </div>
            <h1 className='text-3xl lg:text-5xl text-[#53624e] text-center mb-20 font-serif font-semibold'>Voice From Our Guests</h1>
            <ReviewCarousel />
        </div>
    );
};

export default ReviewsRoot;