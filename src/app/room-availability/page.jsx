'use client';

import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import moment from 'moment';
import BasicDatePicker from '@/components/MUI/BasicDatePicker/BasicDatePicker';
import BasicPopover from '@/components/MUI/BasicPopover/BasicPopover';
import Config from '@/Config';
import AvailableRoomCard from '@/components/LandingPageLayout/Accomodation/AvailableRoomCard';

const page = () => {
    const [allAvailableRooms, setAllAvailableRooms] = useState([]);

    useEffect(() => {
        fetch(`${Config.baseApi}/rooms`)
            .then(res => res.json())
            .then(data => {
                setAllAvailableRooms(data?.data)
            })
    }, []);

    return (
        <div className='w-[90%] md:w-4/5 lg:w-[90%] xl:w-4/5 mx-auto lg:grid grid-cols-12 gap-5 my-10'>
            <div
                className='col-span-5 shadow-lg p-5 h-[420px]'
                style={{
                    backgroundBlendMode: 'overlay',
                    backgroundColor: '#233b00',
                    backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-scales.png")'
                }}
            >
                <Formik
                    initialValues={{
                        checkInDate: null,
                        checkOutDate: null,
                        noOfRooms: 1,
                        guests: { adult: 1, child: 1 },
                    }}
                    onSubmit={(values) => {
                        console.log('Form submitted with:', values);
                        // router.push('/room-availability')
                    }}
                >
                    {({ values, setFieldValue }) => (
                        <Form className='space-y-5'>
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
                            <button
                                type="submit"
                                className="bg-[#B99D75] rounded-md w-full py-3"
                            >
                                Check Availability
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>

            <div className='col-span-7 space-y-5 mt-10 lg:mt-0'>
                {allAvailableRooms.map(room => <AvailableRoomCard key={room?._id} roomDetails={room} />)}
            </div>
        </div>
    );
};

export default page;