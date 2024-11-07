import React from 'react';
import { BsTextarea } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { IoBedOutline, IoWifiOutline } from "react-icons/io5";
import { TbSwimming } from "react-icons/tb";
import { LuBedDouble } from "react-icons/lu";
import { PiHairDryerLight, PiHandSoap, PiWashingMachineThin } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { FaTv } from 'react-icons/fa6';
import { GiTowel } from "react-icons/gi";
import { GiSlippers } from "react-icons/gi";
import { CgCoffee, CgSmartHomeRefrigerator } from "react-icons/cg";
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { RiDrinks2Line } from 'react-icons/ri';
import { SiPetsathome } from "react-icons/si";



const page = () => {
    return (
        <div className='w-4/5 mx-auto grid grid-cols-12 gap-5 mt-10'>
            <div className='col-span-8'>
                <h1 className='md:text-xl lg:text-3xl my-3'>Premier Oceanview Villa</h1>
                <p>Private Pool / Ocean View / Single Level</p>

                <div className='flex flex-col xl:flex-row gap-10 my-3'>
                    <div className='flex items-center gap-2'>
                        <BsTextarea />
                        <p>800 sq m</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <GoPeople />
                        <p>2 Guests</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <IoBedOutline />
                        <p>1 Kind Bed</p>
                    </div>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>

                <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. </p>

                <div className='my-5'>
                    <h3 className='text-xl font-mono mb-3'>Family-friendly Amenities</h3>
                    <div className='grid grid-cols-3 gap-5'>
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
                        <div className='flex items-center gap-3'>
                            <TbAirConditioning className='text-[#dabb9c] text-2xl' />
                            <p>Air conditioner</p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <FaTv className='text-[#dabb9c] text-2xl' />
                            <p>Cable TV</p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <IoWifiOutline className='text-[#dabb9c] text-2xl' />
                            <p>Wifi & Internet</p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <GiTowel className='text-[#dabb9c] text-2xl' />
                            <p>Towels</p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <GiSlippers className='text-[#dabb9c] text-2xl' />
                            <p>Slippers</p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <PiHairDryerLight className='text-[#dabb9c] text-2xl' />
                            <p>Hair Dryer</p>
                        </div>


                        <div className='flex items-center gap-3'>
                            <PiHandSoap className='text-[#dabb9c] text-2xl' />
                            <p>Shampoo</p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <CgCoffee className='text-[#dabb9c] text-2xl' />
                            <p>Espresso Machine</p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <MdOutlineHealthAndSafety className='text-[#dabb9c] text-2xl' />
                            <p>Safe Box</p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <RiDrinks2Line className='text-[#dabb9c] text-2xl' />
                            <p>Welcome Drinks</p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <SiPetsathome className='text-[#dabb9c] text-2xl' />
                            <p>Pet Friendly</p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <CgSmartHomeRefrigerator className='text-[#dabb9c] text-2xl' />
                            <p>In-room Refrigerator</p>
                        </div>
                    </div>
                </div>

                <div className='my-5'>
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

            <div className='col-span-4 shadow-2xl py-5 px-10 h-96'>
                <h1>Reserve</h1>
                <div>
                    <input type="text" className='border border-[#dabb9c] p-2 w-full mb-2' placeholder='Check In'/>
                </div>
                <div>
                    <input type="text" className='border border-[#dabb9c] p-2 w-full mb-2' placeholder='Check Out'/>
                </div>
                <div>
                    <input type="text" className='border border-[#dabb9c] p-2 w-full mb-2' placeholder='Rooms'/>
                </div>
                <div>
                    <input type="text" className='border border-[#dabb9c] p-2 w-full mb-2' placeholder='Adults'/>
                </div>

                <button className='bg-black text-white w-full py-3'>Book Your Stay Now</button>
            </div>
        </div>
    );
};

export default page;