import Image from 'next/image';
import React from 'react';


const RoomCard = ({ roomDetails }) => {
    return (
        <div>
            <Image src={roomDetails?.image} alt='room image' width={400} height={500} />
            <h1>{roomDetails?.roomName}</h1>
            <div className='flex justify-between'>
                <p>{roomDetails?.area}</p>
                <p>{roomDetails?.numberOfGuests}</p>
                <p>{roomDetails?.numberOfBeds}</p>
            </div>
            <p>{roomDetails?.description}</p>

            <button className='border-b border-[#ab916c]'>Discover More</button>

        </div>
    );
};

export default RoomCard;