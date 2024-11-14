'use client';

import Config from '@/Config';
import { use, useEffect, useState } from 'react';
import { BsTextarea } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { IoBedOutline } from "react-icons/io5";
import { LuBedDouble } from "react-icons/lu";
import { PiWashingMachineThin } from "react-icons/pi";
import { TbAirConditioning, TbSwimming } from "react-icons/tb";

const page = ({ params }) => {
    const { roomId } = use(params);

    const [roomDetails, setRoomDetails] = useState({});

    useEffect(() => {
        fetch(`${Config.baseApi}/room/${roomId}`)
            .then(res => res.json())
            .then(data => {
                setRoomDetails(data?.data)
            })
    }, []);

    return (
        <div className='w-4/5 mx-auto md:grid grid-cols-12 gap-5 mt-10'>
            <div className='col-span-8'>
                <h1 className='md:text-xl lg:text-3xl my-3'>{roomDetails?.roomName}</h1>
                <p>Private Pool / Ocean View / Single Level</p>

                <div className='flex gap-2 sm:gap-5 md:gap-10 my-3'>
                    <div className='flex items-center gap-2'>
                        <BsTextarea />
                        <p>{roomDetails?.roomSize} sq m</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <GoPeople />
                        <p>{roomDetails?.numberOfGuest?.adult} Adults</p>
                        <p>{roomDetails?.numberOfGuest?.child} Children</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <IoBedOutline />
                        <p>{roomDetails?.numberOfBed?.king} King Bed</p>
                        <p>{roomDetails?.numberOfBed?.pet} Child Bed</p>
                    </div>
                </div>

                <p>{roomDetails?.description}</p>

                <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. </p>

                <div className='my-10'>
                    <h3 className='text-xl font-mono mb-3'>Family-friendly Amenities</h3>
                    <div className='grid lg:grid-cols-3 gap-5'>
                        <div className='bg-[#FAF7F4]  py-8 flex items-center justify-center gap-2'>
                            <TbSwimming className='text-4xl text-[#dabb9c]' />
                            <p>Kids Swimming Pool</p>
                        </div>
                        <div className='bg-[#FAF7F4] py-8 flex items-center justify-center gap-2'>
                            <LuBedDouble className='text-4xl text-[#dabb9c]' />
                            <p> Extra Beds/Baby Crib</p>
                        </div>
                        <div className='bg-[#FAF7F4] py-8 flex items-center justify-center gap-2'>
                            <PiWashingMachineThin className='text-4xl text-[#dabb9c]' />
                            <p>Washing Machine</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className='text-xl font-mono my-3'>Room Amenities</h3>
                    <div className='grid grid-cols-2 gap-5'>
                        {roomDetails?.roomAmenities?.map((amenity, index) =>
                            <div key={index} className='flex items-center gap-3'>
                                <TbAirConditioning className='text-[#dabb9c] text-2xl' />
                                <p>{amenity}</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className='my-10'>
                    <h3 className='text-xl font-mono my-3'>What’s included in this suite?</h3>
                    <ul className='colored-bullet list-disc pl-5 space-y-5'>
                        <li>Private balcony</li>
                        <li>140x200 cm Elite bed</li>
                        <li>Upholstered seat beside the panoramic window</li>
                        <li>TV-UHD screen for watching mountaineering films</li>
                        <li> Writing desk with USB ports for documenting your adventures</li>
                        <li>Room safe for your top mountain photos</li>
                        <li>Service station with Lavazza coffee machine, kettle and tea</li>
                        <li>Bathroom with rain shower</li>
                        <li>Comfortable terry towels and bathrobes</li>
                    </ul>
                </div>
            </div>

            <div className='col-span-4 shadow-2xl rounded-xl py-5 px-5 lg:px-10 max-h-80'>
                <h1>Reserve</h1>
                <div>
                    <input type="text" className='border border-[#dabb9c] p-2 w-full mb-2' placeholder='Check In' />
                </div>
                <div>
                    <input type="text" className='border border-[#dabb9c] p-2 w-full mb-2' placeholder='Check Out' />
                </div>
                <div>
                    <input type="text" className='border border-[#dabb9c] p-2 w-full mb-2' placeholder='Rooms' />
                </div>
                <div>
                    <input type="text" className='border border-[#dabb9c] p-2 w-full mb-2' placeholder='Adults' />
                </div>

                <button className='bg-black text-white w-full py-3'>Book Your Stay Now</button>
            </div>
        </div>
    );
};

export default page;