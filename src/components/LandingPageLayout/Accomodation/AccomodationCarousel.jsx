"use client"

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import room1 from '../../../assets/room1.jpg';
import room2 from '../../../assets/room2.jpg';
import room3 from '../../../assets/room3.jpg';
import room4 from '../../../assets/room4.jpg';
import RoomCard from './RoomCard';


const allRoomInfo = [
    {
        id: 1,
        image: room1, // Replace with the actual image file or URL
        roomName: "Deluxe Room",
        area: "500 sq ft",
        numberOfGuests: 2,
        numberOfBeds: 1,
        description: "A spacious deluxe room with modern amenities and a beautiful city view. Perfect for a comfortable stay for two guests."
    },
    {
        id: 2,
        image: room2, // Replace with the actual image file or URL
        roomName: "Family Suite",
        area: "800 sq ft",
        numberOfGuests: 4,
        numberOfBeds: 2,
        description: "An ideal family suite featuring two queen beds, a cozy sitting area, and a private balcony. Perfect for families."
    },
    {
        id: 3,
        image: room3, // Replace with the actual image file or URL
        roomName: "Presidential Suite",
        area: "1200 sq ft",
        numberOfGuests: 3,
        numberOfBeds: 1,
        description: "Luxurious suite with a king-size bed, spacious living room, private dining area, and a panoramic view. The ultimate luxury experience."
    },
    {
        id: 4,
        image: room4, // Replace with the actual image file or URL
        roomName: "Studio Apartment",
        area: "400 sq ft",
        numberOfGuests: 1,
        numberOfBeds: 1,
        description: "A cozy studio apartment with modern decor, perfect for solo travelers looking for a comfortable and stylish stay."
    }
];

export default function AccomodationCarousel() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {allRoomInfo.map(eachRoom =>
                    <SwiperSlide key={eachRoom?.id}><RoomCard roomDetails={eachRoom} /></SwiperSlide>
                )}
            </Swiper>
        </>
    );
}
