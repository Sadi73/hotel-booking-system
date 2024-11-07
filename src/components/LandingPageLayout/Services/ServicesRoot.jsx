import React from 'react';
import services1 from '../../../assets/services1.jpg';
import services2 from '../../../assets/services2.jpg';
import Image from 'next/image';
import { FaWifi } from 'react-icons/fa6';
import { MdOutlineCleanHands, MdOutlineFreeBreakfast, MdOutlineLocalLaundryService, MdOutlinePool } from "react-icons/md";
import { TfiCar } from "react-icons/tfi";

const allServices = [
    { id: 1, serviceName: 'Airport Pick-up Service', description: 'Lorem ipsum proin gravida velit auctor sde re sit amet space.', image: <TfiCar /> },
    { id: 2, serviceName: 'Housekeeper Services', description: 'Lorem ipsum proin gravida velit auctor sde re sit amet space.', image: <MdOutlineCleanHands /> },
    { id: 3, serviceName: 'Wifi & Internet', description: 'Lorem ipsum proin gravida velit auctor sde re sit amet space.', image: <FaWifi /> },
    { id: 4, serviceName: 'Laundry Services', description: 'Lorem ipsum proin gravida velit auctor sde re sit amet space.', image: <MdOutlineLocalLaundryService /> },
    { id: 5, serviceName: 'Breakfast in Bed', description: 'Lorem ipsum proin gravida velit auctor sde re sit amet space.', image: <MdOutlineFreeBreakfast /> },
    { id: 6, serviceName: 'Swimming Pool', description: 'Lorem ipsum proin gravida velit auctor sde re sit amet space.', image: <MdOutlinePool /> },
]

const ServicesRoot = () => {
    return (
        <div className='w-4/5 mx-auto grid grid-cols-2 gap-10 my-20'>
            <div>
                <Image src={services1} alt='Service image 1' height={800} />
                <p className='mt-10 text-xl font-mono'>Inspired by our history, surrounded by nature to offer a different experience</p>
            </div>

            <div>
                <p className='font-mono uppercase'>Discover the Services we offered</p>

                <h1 className='text-3xl font-semibold my-5'>All the Essentials for a Cozy and Comfortable Stay</h1>

                <div className='grid grid-cols-2 gap-5 my-10'>
                    {allServices.map(service =>
                        <div key={service?.id} className='flex items-center gap-5'>
                            <div>{service?.image}</div>
                            <div className='space-y-2'>
                                <h4 className='text-xl'>{service?.serviceName}</h4>
                                <p className='text-[#53624e]'>{service?.description}</p>
                            </div>
                        </div>
                    )}
                </div>

                <Image src={services2} alt='Service image 2' />

            </div>
        </div>
    );
};

export default ServicesRoot;