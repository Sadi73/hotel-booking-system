'use client'

import React from 'react';
import bannerImage from '../../../assets/banner.jpg';
import bannerImage2 from '../../../assets/banner2.jpg';
import Image from 'next/image';
import Menubar from './Menubar';
import { usePathname } from 'next/navigation';

const Banner = ({ imagePath }) => {
    const pathname = usePathname();

    return (
        <div className="relative w-full h-[90vh]">
            <Image
                src={imagePath ? imagePath : pathname.split('/').includes('room-availability') ? bannerImage2 : bannerImage}
                alt="banner image"
                layout="fill"
                objectFit="cover"
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50">
                <Menubar />

                {!pathname.split('/').includes('room') &&
                    <div className="h-full flex items-center justify-center text-white">
                        {pathname.split('/').includes('room-availability') ?
                            <div className='md:w-3/4 lg:w-3/5 xl:w-2/5 text-center space-y-3'>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-normal">Room Search Results</h1>
                            </div> :
                            pathname.split('/').includes('all-rooms') ?
                                <div className='md:w-3/4 lg:w-3/5 xl:w-2/5 text-center space-y-3'>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-normal">Find Your Room</h1>
                                </div> :
                                <div className='md:w-3/4 lg:w-3/5 xl:w-2/5 text-center space-y-3'>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-normal">Boutique Private Island Resort</h1>
                                    <p className='text-lg font-mono'>The seaside haven of warmth, tranquility and restoration</p>
                                </div>}
                    </div>}
            </div>

        </div>
    );
};

export default Banner;