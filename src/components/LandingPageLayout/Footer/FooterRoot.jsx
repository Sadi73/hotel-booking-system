import React from 'react';
import banner from '../../../assets/banner.jpg';
import Image from 'next/image';

const FooterRoot = () => {
    return (
        <div>
            <div className='relative'>

                <Image src={banner} alt='footer image' height={300} />

                <div className="absolute inset-0 bg-black bg-opacity-50">
                    <div className="h-full flex items-center text-white">
                        <div className='max-w-96'>
                            <p className=''>Stay Tuned with CozyStay</p>
                            <h1 className="text-xl font-bold">Sign up for our newsletter to receive our news, deals and special offers.</h1>
                        </div>
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