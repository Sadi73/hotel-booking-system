import React from 'react';
import { FaUserEdit } from 'react-icons/fa';

const page = () => {
    return (
        <div className='w-5/6 mx-auto shadow-xl p-5'>
            <div className='flex justify-between mb-10 text-xl font-bold text-blue-900'>
                <h3 className=''>Profile</h3>
                <button className='flex items-center gap-3'><FaUserEdit /> Edit     </button>
            </div>

            <div className='space-y-5 text-black'>
                <div className='flex w-1/2 justify-between'>
                    <label>Name</label>
                    <p>N/A</p>
                </div>

                <hr />

                <div className='flex w-1/2 justify-between'>
                    <label>Gender</label>
                    <p>N/A</p>
                </div>

                <hr />

                <div className='flex w-1/2 justify-between'>
                    <label>Present Address</label>
                    <p>N/A</p>
                </div>

                <hr />

                <div className='flex w-1/2 justify-between'>
                    <label>Permanent Address</label>
                    <p>N/A</p>
                </div>

                <hr />

                <div className='flex w-1/2 justify-between'>
                    <label>Date of Birth</label>
                    <p>N/A</p>
                </div>

                <hr />

                <div className='flex w-1/2 justify-between'>
                    <label>Marrital Status</label>
                    <p>N/A</p>
                </div>

                <hr />

                <div className='flex w-1/2 justify-between'>
                    <label>Passport Country</label>
                    <p>N/A</p>
                </div>

                <hr />

                <div className='flex w-1/2 justify-between'>
                    <label>Passport Number</label>
                    <p>N/A</p>
                </div>

                <hr />

                <div className='flex w-1/2 justify-between'>
                    <label>Passport Expiry Date</label>
                    <p>N/A</p>
                </div>

                <hr />

                <div className='flex w-1/2 justify-between'>
                    <label>Nationality</label>
                    <p>N/A</p>
                </div>

                <hr />

                <div className='flex w-1/2 justify-between'>
                    <label>National ID</label>
                    <p>N/A</p>
                </div>

                <hr />

            </div>
        </div>
    );
};

export default page;