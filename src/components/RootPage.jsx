import React from 'react';
import Banner from './LandingPageLayout/BannerSection/Banner';
import CheckAvailability from './LandingPageLayout/BannerSection/CheckAvailability';
import Overview from './LandingPageLayout/Overview/Overview';
import AccomodationRoot from './LandingPageLayout/Accomodation/AccomodationRoot';
import ExperienceRoot from './LandingPageLayout/Experience/ExperienceRoot';

const RootPage = () => {
    return (
        <div>
            <div className='relative'>
                <Banner />
                <CheckAvailability />
            </div>

            <Overview />

            <AccomodationRoot />

            <ExperienceRoot />
        </div>
    );
};

export default RootPage;