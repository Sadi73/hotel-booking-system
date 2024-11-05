import React from 'react';
import Banner from './LandingPageLayout/BannerSection/Banner';
import CheckAvailability from './LandingPageLayout/BannerSection/CheckAvailability';
import Overview from './LandingPageLayout/Overview/Overview';
import AccomodationRoot from './LandingPageLayout/Accomodation/AccomodationRoot';

const RootPage = () => {
    return (
        <div>
            <div className='relative'>
                <Banner />
                <CheckAvailability />
            </div>

            <Overview />

            <AccomodationRoot />
        </div>
    );
};

export default RootPage;