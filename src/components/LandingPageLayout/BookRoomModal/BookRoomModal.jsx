import { MdOutlineClose } from "react-icons/md";
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Image from 'next/image';
import * as React from 'react';
import { GoDotFill } from 'react-icons/go';
import bannerImage from '../../../assets/room6.jpg';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function BookRoomModal({ isRoomBookModalVisible, setIsRoomBookModalVisible }) {

    const handleClose = () => {
        setIsRoomBookModalVisible(false);
    };

    return (
        <React.Fragment>
            <Dialog
                fullScreen
                open={isRoomBookModalVisible}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <div>

                    <div className="relative w-full h-screen">
                        <Image
                            src={bannerImage}
                            alt="banner image"
                            layout="fill"
                            objectFit="cover"
                        />
                        {/* Black overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-70 ">
                            <div className='flex justify-end pr-5 pt-5 '>
                                <button className='text-white' onClick={handleClose}>  <MdOutlineClose /></button>
                            </div>

                            <div className='flex items-center justify-center md:h-3/4'>
                                <div className="text-white w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 space-y-2 md:space-y-5">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-normal">Book Your Stay</h1>
                                    <p className='xl:w-3/4 mx-auto leading-loose text-center'>Welcome to CozyStay Pacific Hotel. Nestled in the heart of the Pacific Islands resort, on the edge of a tranquil and beautiful Garden Island, CozyStay is a haven of warmth, tranquility and rejuvenation. </p>

                                    <div className=' grid md:grid-cols-2 gap-5 text-white '>
                                        <input
                                            type="text"
                                            className='bg-transparent border border-[#B99D75] rounded-md p-3'
                                            placeholder='Check In' />

                                        <input
                                            type="text"
                                            className='bg-transparent border border-[#B99D75] rounded-md p-3'
                                            placeholder='Check Out' />
                                        <input
                                            type="text"
                                            className='bg-transparent border border-[#B99D75] rounded-md p-3'
                                            placeholder='Rooms' />
                                        <input
                                            type="text"
                                            className='bg-transparent border border-[#B99D75] rounded-md p-3'
                                            placeholder='Guest' />

                                    </div>

                                    <button className='bg-[#B99D75] w-full rounded-md md:col-span-2 lg:col-span-1 py-3 my-5'>Check Availability</button>

                                    <div className='flex justify-evenly'>
                                        <div className='flex items-center'>
                                            <GoDotFill className='text-[#B99D75]'/>
                                            <p>Check-in: 12pm</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <GoDotFill className='text-[#B99D75]'/>
                                            <p>Check-out: 11am</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <GoDotFill className='text-[#B99D75]'/>
                                            <p>Minimum Check-in Age: 18</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </React.Fragment>
    );
}
