'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { CiEdit } from "react-icons/ci";
import { IoIosPeople } from 'react-icons/io';
import Config from '@/Config';
import AddNewRoomModal from '@/components/LandingPageLayout/AddNewRoomModal/AddNewRoomModal';

const page = () => {
    const [addRoomModalVisible, setAddRoomModalVisible] = useState(false);
    const [allRooms, setAllRooms] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        fetch(`${Config.baseApi}/rooms`)
            .then(res => res.json())
            .then(data => {
                setAllRooms(data?.data)
            })
    }, [reload]);

    return (
        <div>

            {addRoomModalVisible &&
                <AddNewRoomModal
                    addRoomModalVisible={addRoomModalVisible}
                    setAddRoomModalVisible={setAddRoomModalVisible}
                    reload={reload}
                    setReload={setReload}
                />}

            <button
                className='w-full md:w-52 bg-[#B99D75] text-white px-10 py-3 mb-5'
                onClick={() => setAddRoomModalVisible(true)}
            > + Add New Room</button>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {allRooms?.map((eachSpace) => (
                    <div key={eachSpace?._id} className='shadow-xl p-2 border rounded-lg space-y-2' >
                        <Image src={eachSpace?.coverImage}
                            alt='room-image'
                            className='rounded-lg w-full h-48'
                            width={300}
                            height={300}
                        />

                        <div className='flex justify-between items-center'>
                            <h4 className='text-black font-semibold'>{eachSpace?.roomName}</h4>
                            <CiEdit />
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <IoIosPeople />
                                <p className="text-black">Capacity - {eachSpace?.capacity}</p>
                            </div>

                            {
                                eachSpace?.isRoomAvailable === 'true' ?
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