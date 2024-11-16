'use client'

import React, { useContext, useState } from 'react';
import hotelImage from '../../assets/hotel1.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import Config from '@/Config';
import { authContext } from '../Providers/AuthProvider';

const page = () => {
    const router = useRouter();
    const { setIsAuthenticated } = useContext(authContext);
    const [errorMessage, setErrorMessage] = useState(null);

    return (
        <div className='flex flex-col md:flex-row h-screen'>
            <div className='md:w-1/2 h-full'>
                <Image
                    src={hotelImage}
                    alt='hotel image'
                    className='h-full w-full'
                />
            </div>

            <div className='bg-[#53624E] md:w-1/2 flex items-center justify-center py-10 md:p-0'>
                <div className='md:w-3/5'>
                    <h1 className='text-3xl text-center text-white font-semibold mb-7'>Sign In</h1>

                    {errorMessage && <p className='text-red-300'>{errorMessage}</p>}

                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={Yup.object({
                            email: Yup.string().email('Invalid email format').required('Email is required'),
                            password: Yup.string().min(6, 'Password should be at least 6 characters').required('Password is required')
                        })}
                        onSubmit={(value) => {

                            fetch(`${Config.baseApi}/login`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(value)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    localStorage.removeItem('authInfo');
                                    if (data?.success) {
                                        const userInfo = {
                                            userName: data?.user?.name,
                                            email: data?.user?.email,
                                            token: data?.token
                                        }
                                        localStorage.setItem('authInfo', JSON.stringify(userInfo));
                                        setIsAuthenticated(true);
                                        router.push('/');
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


                                <button type='submit' className='bg-[#B99D75] w-full text-white py-3 rounded-md'>
                                    Sign In
                                </button>

                            </Form>


                        )}
                    </Formik>

                    <p className='text-white'><span className='opacity-70 font-normal'>Do not have an account?</span> <Link href='/register' className='font-semibold cursor-pointer'>Create Account</Link></p>

                    <Link href='/' className='text-white'>Go To Home</Link>

                </div>
            </div>
        </div>
    );
};

export default page;