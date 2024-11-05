"use client"

import React, { useRef, useState } from 'react';
import carousel1 from '../../../assets/carousel 1.jpg';
import carousel2 from '../../../assets/carousel 2.jpg';
import carousel3 from '../../../assets/carousel 3.jpg';
import carousel4 from '../../../assets/carousel 4.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function SwiperSection() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src={carousel1} alt='carousel1' width={400} height={800}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={carousel2} alt='carousel2' width={400} height={800}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={carousel3} alt='carousel3' width={400} height={800}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={carousel4} alt='carousel4' width={400} height={800}/>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
