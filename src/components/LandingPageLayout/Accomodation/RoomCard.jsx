import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsTextarea } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { IoBedOutline } from "react-icons/io5";

const RoomCard = ({ roomDetails }) => {
    return (
        <div className='font-serif'>
            <Image src={roomDetails?.coverImage} alt='room image' width={400} height={500} />
            <h1 className='md:text-xl lg:text-3xl my-3'>{roomDetails?.roomName}</h1>
            <div className='flex flex-col xl:flex-row justify-between'>
                <div className='flex items-center gap-2'>
                    <BsTextarea />
                    <p>{roomDetails?.roomSize}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <GoPeople />
                    <p>{roomDetails?.numberOfGuest?.adult + roomDetails?.numberOfGuest?.child} Guests</p>
                </div>
                <div className='flex items-center gap-2'>
                    <IoBedOutline />
                    <p>{roomDetails?.numberOfBed?.king} King Bed</p>
                </div>
            </div>
            <p className='my-3'>{roomDetails?.description?.slice(0, 90)}...</p>

            <Link href={`room/${roomDetails?._id}`} className='border-b border-[#ab916c]'>Discover More </Link>

        </div>
    );
};

export default RoomCard;