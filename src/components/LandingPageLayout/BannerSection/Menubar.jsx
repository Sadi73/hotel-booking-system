'use client'

import Link from 'next/link';
import React, { useState, useRef, useEffect, useContext } from 'react';
import { IoIosMenu } from "react-icons/io";
import BookRoomModal from '../BookRoomModal/BookRoomModal';
import { authContext } from '@/Providers/AuthProvider';
import AccountMenu from './AccountMenu';

const Menubar = () => {
    const { isAuthenticated } = useContext(authContext)
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const [isRoomBookModalVisible, setIsRoomBookModalVisible] = useState(false);
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

            <BookRoomModal
                isRoomBookModalVisible={isRoomBookModalVisible}
                setIsRoomBookModalVisible={setIsRoomBookModalVisible}
            />

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
                className={`fixed top-0 left-0 h-full w-64 bg-gray-800  text-white transform ${isDrawerVisible ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out z-50 p-5 flex flex-col justify-between`}
            >
                <ul className='space-y-4 font-mono'>
                    <li>Home</li>
                    <li>Stay</li>
                    <li>Rooms</li>
                    <li>Gallery</li>
                    <li onClick={() => setIsRoomBookModalVisible(true)}>Book Now</li>
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
            <ul className='hidden text-md lg:text-lg font-mono md:flex items-center gap-8'>
                <li className='hover:border-b'><Link href='/'>Home</Link></li>
                <li className='hover:border-b'><Link href='/'>Stay</Link></li>
                <li className='hover:border-b'><Link href='/'>Rooms</Link></li>
                <li className='hover:border-b'><Link href='/'>Gallery</Link></li>
                <li>
                    <button
                        href='/'
                        className='relative inline-block font-mono text-white hover:text-black px-5 py-2 overflow-hidden border group'
                        onClick={() => setIsRoomBookModalVisible(true)}
                    >
                        <span className='relative z-10 '>Book Now</span>
                        <span className='absolute inset-0 bg-white transition-transform duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0'></span>
                    </button>
                </li>
            </ul>

            {/* Logo and Login button */}
            <h1 className='uppercase text-3xl font-mono font-bold'>Cosystay</h1>

            {!isAuthenticated ?
                <Link
                    href='/login'
                    className='relative border px-5 py-2 font-mono text-white hover:text-black overflow-hidden group'
                >
                    <span className='relative z-10'>Login</span>
                    <span className='absolute inset-0 bg-white transition-transform duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0'></span>
                </Link>
                : <AccountMenu />

            }
        </div>
    );
};

export default Menubar;
