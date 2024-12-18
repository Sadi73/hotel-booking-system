"use client"

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import traveler1 from '../../../assets/traveler1.jpg';
import traveler2 from '../../../assets/traveler2.jpg';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';

const hotelReviews = [
    {
        id: 1,
        reviewerName: "John Doe",
        rating: 4.5,
        reviewDate: "2024-10-10",
        reviewText: "Amazing stay! The staff was friendly and the room was clean. The breakfast buffet had a lot of variety. Will definitely come back!",
        title: "Great Experience",
        image: traveler1
    },
    {
        id: 2,
        reviewerName: "Jane Smith",
        rating: 3.0,
        reviewDate: "2024-09-28",
        reviewText: "The location was perfect, but the room was smaller than expected. Overall, it was decent, but I was hoping for a bit more space.",
        title: "Good Location, Small Room",
        image: traveler2
    },
    {
        id: 3,
        reviewerName: "Michael Johnson",
        rating: 5.0,
        reviewDate: "2024-10-05",
        reviewText: "Everything was perfect! The service was top-notch and the amenities were beyond expectations. The pool area was the highlight of my stay.",
        title: "Exceptional Stay",
        image: traveler1
    },
    {
        id: 4,
        reviewerName: "Emily Brown",
        rating: 2.5,
        reviewDate: "2024-11-01",
        reviewText: "The hotel looked good in pictures but was a bit disappointing in reality. The bathroom wasn’t as clean as I’d like, and the air conditioning didn’t work well.",
        title: "Could Be Better",
        image: traveler2
    },
    {
        id: 5,
        reviewerName: "David Wilson",
        rating: 4.0,
        reviewDate: "2024-11-03",
        reviewText: "The hotel was overall good, but the check-in process was slow. Once we got settled, everything else was smooth. The food at the restaurant was great!",
        title: "Good, but Slow Check-In",
        image: traveler1
    },
];



export default function ReviewCarousel() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {hotelReviews.map(eachReview =>
                    <SwiperSlide key={eachReview?.id}>
                        <div className="relative">
                            <div className='flex justify-center'>
                                <Image src={eachReview?.image} alt='traveler1 Image' height={600} />
                            </div>

                            <div className="absolute inset-0 bg-black bg-opacity-60">
                                <div className="h-full flex items-center justify-center text-white">
                                    <div className='lg:w-4/5 xl:w-3/5 text-center space-y-3'>
                                        <p className='md:text-xl leading-normal w-2/3 mx-auto'>
                                            {eachReview?.reviewText}
                                        </p>
                                        <h1 className="md:text-2xl lg:text-4xl font-bold flex justify-center"><FaQuoteLeft className='md:text-xl'/> {eachReview?.reviewerName} <FaQuoteRight className='md:text-xl'/></h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>

        </>
    );
}
