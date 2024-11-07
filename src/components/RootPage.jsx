import React from 'react';
import Banner from './LandingPageLayout/BannerSection/Banner';
import CheckAvailability from './LandingPageLayout/BannerSection/CheckAvailability';
import Overview from './LandingPageLayout/Overview/Overview';
import AccomodationRoot from './LandingPageLayout/Accomodation/AccomodationRoot';
import ExperienceRoot from './LandingPageLayout/Experience/ExperienceRoot';
import ReviewsRoot from './LandingPageLayout/Reviews/ReviewsRoot';
import ServicesRoot from './LandingPageLayout/Services/ServicesRoot';
import FooterRoot from './LandingPageLayout/Footer/FooterRoot';

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

            <div className='mt-20 md:mt-[600px] xl:mt-[700px] mb-20'>
                <ReviewsRoot />
            </div>

            <ServicesRoot />

            <FooterRoot/>
        </div>
    );
};

export default RootPage;