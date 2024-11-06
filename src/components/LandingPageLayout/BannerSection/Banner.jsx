import React from 'react';
import bannerImage from '../../../assets/banner.jpg';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="relative w-full h-[90vh]">
            <Image
                src={bannerImage}
                alt="banner image"
                layout="fill"
                objectFit="cover"
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50">
                <div>

                </div>


                <div className="h-full flex items-center justify-center text-white">
                    <div className='w-2/5 text-center'>
                        <h1 className="text-6xl font-bold leading-normal">Boutique Private Island Resort</h1>
                        <p className='text-lg font-mono'>The seaside haven of warmth, tranquility and restoration</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;