import { MdOutlineClose } from "react-icons/md";
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Image from 'next/image';
import * as React from 'react';
import { GoDotFill } from 'react-icons/go';
import bannerImage from '../../../assets/room6.jpg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import BasicDatePicker from "@/components/MUI/BasicDatePicker/BasicDatePicker";
import BasicPopover from "@/components/MUI/BasicPopover/BasicPopover";
import moment from "moment";

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

                                    <Formik
                                        initialValues={{
                                            checkInDate: null,
                                            checkOutDate: null,
                                            noOfRooms: 1,
                                            guests: { adult: 1, child: 1 },
                                        }}
                                        onSubmit={(values) => {
                                            console.log('Form submitted with:', values);
                                            router.push('/room-availability')
                                        }}
                                    >
                                        {({ values, setFieldValue }) => (
                                            <Form className="md:grid grid-cols-2 gap-5 text-white">
                                                {/* Check-in Date */}
                                                <BasicDatePicker
                                                    label="Check In"
                                                    selectedDate={values.checkInDate ? moment(values.checkInDate) : null}
                                                    setSelectedDate={(date) => setFieldValue('checkInDate', moment(date).format('YYYY-MM-DD'))}
                                                />

                                                {/* Check-out Date */}
                                                <BasicDatePicker
                                                    label="Check Out"
                                                    selectedDate={values.checkOutDate ? moment(values.checkOutDate) : null}
                                                    setSelectedDate={(date) => setFieldValue('checkOutDate', moment(date).format('YYYY-MM-DD'))}
                                                />

                                                {/* Number of Rooms */}
                                                <BasicPopover
                                                    label="Rooms"
                                                    subLabel={`${values.noOfRooms} Room`}
                                                    values={values}
                                                    setFieldValue={setFieldValue}
                                                />

                                                {/* Guests */}
                                                <BasicPopover
                                                    label="Guests"
                                                    subLabel={`${values.guests.adult} Adult ${values.guests.child} Child`}
                                                    values={values}
                                                    setFieldValue={setFieldValue}
                                                />

                                                {/* Submit Button */}
                                                <button className='bg-[#B99D75] w-full rounded-md col-span-2  py-3 my-5'>Check Availability</button>

                                            </Form>
                                        )}
                                    </Formik>

                                    <div className='flex justify-evenly'>
                                        <div className='flex items-center'>
                                            <GoDotFill className='text-[#B99D75]' />
                                            <p>Check-in: 12pm</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <GoDotFill className='text-[#B99D75]' />
                                            <p>Check-out: 11am</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <GoDotFill className='text-[#B99D75]' />
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
