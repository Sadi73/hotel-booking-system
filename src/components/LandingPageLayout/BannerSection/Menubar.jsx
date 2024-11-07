'use client'

import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { IoIosMenu } from "react-icons/io";

const Menubar = () => {
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const drawerRef = useRef(null);

    const handleClickOutside = (event) => {
        if (drawerRef.current && !drawerRef.current.contains(event.target)) {
            setIsDrawerVisible(false);
        }
    };

    useEffect(() => {
        // Add event listener to detect clicks outside the drawer
        document.addEventListener('mousedown', handleClickOutside);

        // Toggle body scroll when the drawer is open
        if (isDrawerVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Clean up event listener and body overflow style on unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'auto';
        };
    }, [isDrawerVisible]); // Include isDrawerVisible in the dependency array

    return (
        <div className='text-white flex items-center justify-between px-5 md:px-10 mt-5 pb-8 border-b relative'>
            {/* Menu Icon */}
            <div
                className='md:hidden'
                onClick={() => setIsDrawerVisible(!isDrawerVisible)}
            >
                <IoIosMenu className='text-3xl cursor-pointer' />
            </div>

            {/* Drawer */}
            <div
                ref={drawerRef}
                className={`fixed top-0 left-0 h-full w-64 bg-gray-800  text-white transform ${
                    isDrawerVisible ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out z-50 p-5 flex flex-col justify-between`}
            >
                <ul className='space-y-4 font-mono'>
                    <li>Home</li>
                    <li>Stay</li>
                    <li>Rooms</li>
                    <li>Gallery</li>
                </ul>

                {/* Close Button at Bottom */}
                <button
                    onClick={() => setIsDrawerVisible(false)}
                    className="text-lg font-bold mb-5"
                >
                    Close
                </button>
            </div>

            {/* Menu items for larger screens */}
            <ul className='hidden text-md lg:text-lg font-mono md:flex gap-8'>
                <li>Home</li>
                <li>Stay</li>
                <li>Rooms</li>
                <li>Gallery</li>
            </ul>

            {/* Logo and Login button */}
            <h1 className='uppercase text-3xl font-mono font-bold'>Cosystay</h1>
            <Link href='/login' className='border px-5 py-2 font-mono'>Login</Link>
        </div>
    );
};

export default Menubar;
