import React from 'react';

const Menubar = () => {
    return (
        <div className='text-white flex justify-between px-10 mt-5'>
            <div>
                <ul className='text-xl font-mono flex gap-10'>
                    <li>Home</li>
                    <li>Stay</li>
                    <li>Rooms</li>
                    <li>Galarry</li>
                </ul>
            </div>
            <div>
                <h1 className='uppercase text-3xl font-mono font-bold'>Cosystay</h1>
            </div>
            <div>
                <button className='border px-5 py-2 font-mono'>Login</button>
            </div>
        </div>
    );
};

export default Menubar;