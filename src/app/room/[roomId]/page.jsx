'use client';

import { authContext } from '@/Providers/AuthProvider';
import BasicDatePicker from '@/components/MUI/BasicDatePicker/BasicDatePicker';
import BasicPopover from '@/components/MUI/BasicPopover/BasicPopover';
import Config from '@/Config';
import { Form, Formik } from 'formik';
import moment from 'moment';
import { use, useContext, useEffect, useState } from 'react';
import { BsTextarea } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { IoBedOutline } from "react-icons/io5";
import { LuBedDouble } from "react-icons/lu";
import { PiWashingMachineThin } from "react-icons/pi";
import { TbAirConditioning, TbSwimming } from "react-icons/tb";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from '@/components/LandingPageLayout/BannerSection/Banner';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    checkInDate: Yup.date()
        .nullable()
        .required('Check-in date is required')
        .test('is-today-or-future', 'Check-in date cannot be in the past', (value) =>
            value ? moment(value).isSameOrAfter(moment(), 'day') : true
        ),
    checkOutDate: Yup.date()
        .nullable()
        .required('Check-out date is required')
        .test('is-after-checkin', 'Check-out date must be after check-in date', function (value) {
            const { checkInDate } = this.parent;
            return value && checkInDate ? moment(value).isAfter(moment(checkInDate), 'day') : true;
        }),
    noOfRooms: Yup.number()
        .required('Number of rooms is required')
        .min(1, 'At least one room must be selected')
        .max(10, 'Cannot book more than 10 rooms at once'),
});

const page = ({ params }) => {
    const { roomId } = use(params);

    const { authInfo } = useContext(authContext);

    const [roomDetails, setRoomDetails] = useState({});

    useEffect(() => {
        fetch(`${Config.baseApi}/room/${roomId}`)
            .then(res => res.json())
            .then(data => {
                setRoomDetails(data?.data)
            })
    }, []);

    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

            <Banner imagePath={roomDetails?.coverImage} />

            <div className='w-4/5 mx-auto lg:grid grid-cols-12 items-start gap-5 mt-10'>
                <div className='col-span-8'>
                    <h1 className='md:text-xl lg:text-3xl my-3'>{roomDetails?.roomName}</h1>
                    <p>Private Pool / Ocean View / Single Level</p>

                    <div className='flex flex-col md:flex-row gap-2 sm:gap-5 md:gap-10 my-3'>
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

                {authInfo?.role !== 'ADMIN' &&
                    <div className='col-span-4 shadow-2xl rounded-xl py-5 px-5 lg:px-10 bg-black bg-opacity-30'>
                        <div className='flex lg:flex-col xl:flex-row justify-between items-center my-5'>
                            <h1 className='uppercase text-2xl font-mono'>Reserve</h1>
                            <p>From <span className='font-bold'>${roomDetails?.price}</span>/night</p>
                        </div>

                        <Formik
                            initialValues={{
                                checkInDate: null,
                                checkOutDate: null,
                                noOfRooms: 1,
                                guests: { adult: 1, child: 0 },
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                fetch(`${Config.baseApi}/book-room`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({ ...values, roomId, reservedBy: authInfo?.email }),
                                })
                                    .then((res) => res.json())
                                    .then((data) => {
                                        if (data?.status === 200) {
                                            toast.success('Room Booking Successful');
                                        } else {
                                            toast.error('Something went wrong');
                                        }
                                    })
                                    .finally(() => {
                                        setSubmitting(false);
                                    });
                            }}
                        >
                            {({ values, setFieldValue, errors, isSubmitting }) => (
                                <Form className="space-y-5">
                                    {/* Check-in Date */}
                                    <div>
                                        <BasicDatePicker
                                            label="Check In"
                                            selectedDate={values.checkInDate ? moment(values.checkInDate) : null}
                                            setSelectedDate={(date) =>
                                                setFieldValue('checkInDate', moment(date).format('YYYY-MM-DD'))
                                            }
                                        />
                                        {errors.checkInDate && <p className='text-red-800'>{errors.checkInDate}</p>}
                                    </div>

                                    {/* Check-out Date */}
                                    <div>
                                        <BasicDatePicker
                                            label="Check Out"
                                            selectedDate={values.checkOutDate ? moment(values.checkOutDate) : null}
                                            setSelectedDate={(date) =>
                                                setFieldValue('checkOutDate', moment(date).format('YYYY-MM-DD'))
                                            }
                                        />
                                        {errors.checkOutDate && <p className='text-red-800'>{errors.checkOutDate}</p>}
                                    </div>

                                    {/* Number of Rooms */}
                                    <div>
                                        <BasicPopover
                                            label="Rooms"
                                            subLabel={`${values.noOfRooms} Room`}
                                            values={values}
                                            setFieldValue={setFieldValue}
                                        />
                                        {errors.noOfRooms && <p className='text-red-800'>{errors.noOfRooms}</p>}
                                    </div>

                                    {/* Guests */}
                                    <BasicPopover
                                        label="Guests"
                                        subLabel={`${values.guests.adult} Adult ${values.guests.child} Child`}
                                        values={values}
                                        setFieldValue={setFieldValue}
                                    />

                                    {/* Submit Button */}
                                    <button type="submit" disabled={isSubmitting} className="bg-black text-white w-full py-3">
                                        Book Your Stay Now
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>}
            </div>
        </>
    );
};

export default page;