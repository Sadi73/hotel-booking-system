import Image from 'next/image';
import React from 'react';
import { BsTextarea } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { IoBedOutline } from "react-icons/io5";

const RoomCard = ({ roomDetails }) => {
    return (
        <div className='space-y-3 font-serif'>
            <Image src={roomDetails?.image} alt='room image' width={400} height={500} />
            <h1 className='text-3xl'>{roomDetails?.roomName}</h1>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                    <BsTextarea />
                    <p>{roomDetails?.area}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <GoPeople />
                    <p>{roomDetails?.numberOfGuests} Guests</p>
                </div>
                <div className='flex items-center gap-2'>
                    <IoBedOutline />
                    <p>{roomDetails?.numberOfBeds} Kind Bed</p>
                </div>
            </div>
            <p>{roomDetails?.description}</p>

            <button className='border-b border-[#ab916c]'>Discover More </button>

        </div>
    );
};

export default RoomCard;