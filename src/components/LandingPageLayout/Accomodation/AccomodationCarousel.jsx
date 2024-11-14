"use client"

import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import RoomCard from './RoomCard';
import Config from '@/Config';

const AccomodationCarousel = () => {
    const [allRooms, setAllRooms] = useState([]);

    useEffect(() => {
        fetch(`${Config.baseApi}/rooms`)
            .then(res => res.json())
            .then(data => {
                setAllRooms(data?.data)
            })
    }, []);

    return (
        <>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper accomodation-slider"
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
            >
                {allRooms.map(eachRoom =>
                    <SwiperSlide key={eachRoom?._id}><RoomCard roomDetails={eachRoom} /></SwiperSlide>
                )}
            </Swiper>
        </>
    );
};

export default AccomodationCarousel;
