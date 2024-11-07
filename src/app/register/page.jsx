import React from 'react';
import hotelImage from '../../assets/hotel1.jpg';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
    return (
        <div className='flex flex-col md:flex-row h-screen'>
            <div className='bg-[#53624E] md:w-1/2 flex items-center justify-center py-5 md:p-0'>
                <div className='w-3/4'>
                    <h1 className='text-3xl text-center text-white font-semibold mb-7'>Register</h1>
                    <form className='space-y-3'>
                        <div>
                            <input
                                type="text"
                                className='bg-transparent border border-[#B99D75] rounded-md p-3 w-full'
                                placeholder='Enter Name'
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                className='bg-transparent border border-[#B99D75] rounded-md p-3 w-full'
                                placeholder='Enter Email'
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                className='bg-transparent border border-[#B99D75] rounded-md p-3 w-full'
                                placeholder='Enter Password'
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                className='bg-transparent border border-[#B99D75] rounded-md p-3 w-full'
                                placeholder='Confirm Password'
                            />
                        </div>
                        <button className='bg-[#B99D75] w-full text-white py-3 rounded-md'>Register</button>

                        <p className='text-white'><span className='opacity-70 font-normal'>Already have an account?</span> <Link href='/login' className='font-semibold cursor-pointer'>Login</Link></p>
                    </form>

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