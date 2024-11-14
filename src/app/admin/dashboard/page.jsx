import React from 'react';
import AmountSummary from '@/components/Dashboard/AdminComponents/Dashboard/AmountSummary';
import BookingSummary from '@/components/Dashboard/AdminComponents/Dashboard/BookingSummary';
import ReservationSummary from '@/components/Dashboard/AdminComponents/Dashboard/ReservationSummary';
import RevenueSummary from '@/components/Dashboard/AdminComponents/Dashboard/RevenueSummary';
import RoomSummary from '@/components/Dashboard/AdminComponents/Dashboard/RoomSummary';
import VisitorsSummary from '@/components/Dashboard/AdminComponents/Dashboard/VisitorsSummary';

const page = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2 gap-5'>
                <ReservationSummary />
                <RoomSummary />
            </div>

            <div className='mt-10 grid grid-cols-12 gap-5'>
                <div className='col-span-12 lg:col-span-7 space-y-7'>
                    <RevenueSummary />
                    <BookingSummary/>
                </div>
                <div className='col-span-12 lg:col-span-5 space-y-7'>
                    <VisitorsSummary />
                    <AmountSummary/>
                </div>
            </div>
        </div>
    );
};

export default page;