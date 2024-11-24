"use client"

import RoomCardForAllRoom from '@/components/LandingPageLayout/Accomodation/RoomCardForAllRoom';
import Banner from '@/components/LandingPageLayout/BannerSection/Banner';
import Config from '@/Config';
import React, { useEffect, useState } from 'react';
import bannerImage from '../../assets/banner3.jpg';
import FooterRoot from '@/components/LandingPageLayout/Footer/FooterRoot';

const page = () => {

    const [allRooms, setAllRooms] = useState([]);

    useEffect(() => {
        fetch(`${Config.baseApi}/rooms`)
            .then(res => res.json())
            .then(data => {
                setAllRooms(data?.data)
            })
    }, []);

    return (
        <div>
            <Banner imagePath={bannerImage} />

            <div className=' bg-[#F3F3F0] mb-5'>
                <div className='lg:w-2/3 md:w-4/5 mx-auto  py-20 md:pt-48 md:pb-28 lg:py-28 space-y-5 text-center'>
                    <p className='uppercase font-serif text-sm text-[#53624e]'>Start Your Comfortable Stay</p>

                    <h1 className='text-xl md:text-3xl font-mono font-semibold md:font-normal leading-normal'>Explore our refined accommodation options and find the perfect space for your stay.</h1>

                    <p className='text-sm md:text-lg font-serif leading-loose'>The resort offers a total of 139 suites and villas and a wide range of facilities, services and activities to its guests. In an effort to provide a peaceful and tranquil environment.</p>
                </div>
            </div>

            <div className='space-y-5 w-2/3 mx-auto'>
                {allRooms.map((room, index) => <RoomCardForAllRoom key={room?._id} roomDetails={room} index={index} />)}
            </div>

            <FooterRoot />
        </div>
    );
};

export default page;