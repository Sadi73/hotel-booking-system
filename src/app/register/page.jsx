'use client'

import React, { useState } from 'react';
import hotelImage from '../../assets/hotel1.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';


const page = () => {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState(null);

    return (
        <div className='flex flex-col md:flex-row h-screen'>
            <div className='bg-[#53624E] md:w-1/2 flex items-center justify-center py-5 md:p-0'>
                <div className='w-3/4'>
                    <h1 className='text-3xl text-center text-white font-semibold mb-7'>Register</h1>

                    {errorMessage && <p className='text-red-300'>{errorMessage}</p>}


                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                            confirmPassword: ''
                        }}
                        validationSchema={Yup.object({
                            name: Yup.string().required('Name is required'),
                            email: Yup.string().email('Invalid email format').required('Email is required'),
                            password: Yup.string().min(6, 'Password should be at least 6 characters').required('Password is required'),
                            confirmPassword: Yup.string()
                                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                                .required('Confirm Password is required')
                        })}
                        onSubmit={(value) => {

                            fetch('http://localhost:4000/register', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(value)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data)
                                    if (data?.status === 201) {
                                        router.push('/login');
                                    } else {
                                        setErrorMessage(data?.message)
                                    }
                                })
                        }}
                    >
                        {({ handleChange, handleBlur, values }) => (
                            <Form className='space-y-3'>
                                <div>
                                    <Field
                                        type="text"
                                        name='name'
                                        className='bg-transparent border border-[#B99D75] rounded-md p-3 w-full'
                                        placeholder='Enter Name'
                                    />
                                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                <div>
                                    <Field
                                        type="text"
                                        name='email'
                                        className='bg-transparent border border-[#B99D75] rounded-md p-3 w-full'
                                        placeholder='Enter Email'
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                <div>
                                    <Field
                                        type="password"
                                        name='password'
                                        className='bg-transparent border border-[#B99D75] rounded-md p-3 w-full'
                                        placeholder='Enter Password'
                                    />
                                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                <div>
                                    <Field
                                        type="password"
                                        name='confirmPassword'
                                        className='bg-transparent border border-[#B99D75] rounded-md p-3 w-full'
                                        placeholder='Confirm Password'
                                    />
                                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                <button type='submit' className='bg-[#B99D75] w-full text-white py-3 rounded-md'>
                                    Register
                                </button>

                                <p className='text-white'>
                                    <span className='opacity-70 font-normal'>Already have an account?</span>{' '}
                                    <Link href='/login' className='font-semibold cursor-pointer'>Login</Link>
                                </p>
                            </Form>
                        )}
                    </Formik>

                    <Link href='/' className='text-white'>Go To Home</Link>
                </div>
            </div>

            <div className='md:w-1/2 h-full'>
                <Image
                    src={hotelImage}
                    alt='hotel image'
                    className='h-full w-full'
                />
            </div>
        </div>
    );
};

export default page;