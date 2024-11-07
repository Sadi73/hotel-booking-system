import React from 'react';
import banner from '../../../assets/banner.jpg';
import Image from 'next/image';

const FooterRoot = () => {
    return (
        <div>
            <div className="relative w-full h-[300px]">
                {/* Image with full width and cover */}
                <Image
                    src={banner}
                    alt="footer image"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col md:flex-row items-center justify-around">
                    <div className="md:w-2/5 text-center text-white px-4">
                        <p>Stay Tuned with CozyStay</p>
                        <h1 className="text-xl font-bold">Sign up for our newsletter to receive our news, deals, and special offers.</h1>
                    </div>

                    <div className='relative'>
                        <input type="text"  placeholder='Your Message' className='p-3 bg-transparent text-white border rounded w-72 lg:w-96'/>
                        <button className='text-white text-xl opacity-80 absolute top-1 right-4 border-l pl-2 py-2'>Send</button>
                    </div>
                </div>
            </div>

            <div className='bg-black py-5'>
                <p className='text-white text-center'>Copyright &copy; 2024 Your Company Name. All rights reserved.</p>
            </div>
        </div>
    );
};

export default FooterRoot;