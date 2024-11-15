'use client';

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import BasicDatePicker from '../../MUI/BasicDatePicker/BasicDatePicker';
import BasicPopover from '@/components/MUI/BasicPopover/BasicPopover';
import moment from 'moment';
import { useRouter } from 'next/navigation';

const CheckAvailability = () => {

    const router = useRouter();

    return (
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
                <Form className="bg-[#53624E] grid md:grid-cols-2 lg:grid-cols-5 items-center gap-5 text-white md:absolute lg:-bottom-14 md:-bottom-36 xl:left-20 lg:left-14 md:left-16 lg:right-14 md:right-10 px-5 py-8">
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
                        className="bg-[#B99D75] rounded-md md:col-span-2 lg:col-span-1 py-3"
                    >
                        Check Availability
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default CheckAvailability;
