import React from 'react';
import experience from '../../../assets/experience.jpg'
import facilities1 from '../../../assets/facilities1.jpg'
import facilities2 from '../../../assets/facilities2.jpg'
import facilities3 from '../../../assets/facilities3.jpg'
import Image from 'next/image';

const facilities = [
    {
        id: 1,
        title: 'Spa & Wellness',
        description: 'Set in lush jungle, our modern spa embodies the calm of nature, offering extraordinary visual and auditory experiences that pamper and heal.',
        image: facilities1
    },
    {
        id: 2,
        title: 'Island Activities',
        description: 'A playground for the over-and-underwater world adventurers. Surfing, diving, snorkeling, fishing, sailing, nature trails & villages to explore.',
        image: facilities2
    },
    {
        id: 3,
        title: 'Gastronomic Dine',
        description: 'Our restaurants use fresh, organic ingredients that are locally produced and sourced. Delicious flavors and a warm atmosphere are the perfect way to unwind.',
        image: facilities3
    },
]

const ExperienceRoot = () => {
    return (
        <div className='relative'>
            {/* Background Image with Overlay */}
            <div className="relative">
                <Image src={experience} alt='Experience Image' />

                <div className="absolute inset-0 bg-black bg-opacity-60">
                    <div className="h-full flex items-center justify-center text-white">
                        <div className='md:w-4/5 lg:w-2/4 text-center space-y-5'>
                            <h1 className="text-xl md:text-4xl xl:text-5xl font-semibold">One of the World's Most Desirable Locations</h1>
                            <p className='text-lg font-mono'>
                                A superior, 5-star resort embodying the very best of Fiji Islands luxury, tranquility & sophistication.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Facilities Grid Without Overlay */}
            <div className='w-4/5 mx-auto grid md:grid-cols-3 gap-4 md:absolute top-3/4 xl:left-36 lg:left-24 md:left-20 mt-5 md:m-0'>
                {facilities.map(facility => (
                    <div key={facility?.id} className='space-y-3 text-center'>
                        <Image src={facility?.image} alt='Facility Image' height={400} width={400} />
                        <p className='text-3xl'>{facility?.title}</p>
                        <p className='leading-relaxed'>{facility?.description}</p>
                        <div className='flex justify-center'>
                            <button className='border-b border-[#ab916c]'>Discover More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ExperienceRoot;