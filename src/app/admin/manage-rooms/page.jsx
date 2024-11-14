import React from 'react';
import room1 from '../../../assets/room1.jpg';
import room2 from '../../../assets/room2.jpg';
import room3 from '../../../assets/room3.jpg';
import room4 from '../../../assets/room4.jpg';
import Image from 'next/image';
import { CiEdit } from "react-icons/ci";
import { IoIosPeople } from 'react-icons/io';


const dummyRoomList = [
    {
        id: 1,
        picture: room1,
        roomName: 'Premium Suit',
        capacity: 3,
        isRoomAvailable: true
    },
    {
        id: 2,
        picture: room2,
        roomName: 'Couple Delux',
        capacity: 2,
        isRoomAvailable: false
    },
    {
        id: 3,
        picture: room3,
        roomName: 'Personal Banglow',
        capacity: 10,
        isRoomAvailable: true
    },
]

const page = () => {
    return (
        <div>
            <button className='w-full md:w-52 bg-[#B99D75] text-white px-10 py-3 mb-5'>Add New Room</button>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {dummyRoomList?.map((eachSpace) => (
                    <div key={eachSpace?.id} className='shadow-xl p-2 border rounded-lg space-y-2' >
                        <Image src={eachSpace?.picture}
                            alt='room-image'
                            className='rounded-lg'
                        />

                        <div className='flex justify-between items-center'>
                            <h4 className='' >{eachSpace?.roomName}</h4>
                            <CiEdit />
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <IoIosPeople />
                                <p className="">Capacity - {eachSpace?.capacity}</p>
                            </div>

                            {
                                eachSpace?.isRoomAvailable ?
                                    <p className="text-[#0D9344]">
                                        ● Free Now
                                    </p>
                                    : <p className="text-font-2 text-[#EC4747]" >
                                        ● Occupied
                                    </p>
                            }
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    );
};

export default page;