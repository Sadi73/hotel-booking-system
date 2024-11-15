import AccomodationRoot from './LandingPageLayout/Accomodation/AccomodationRoot';
import ExperienceRoot from './LandingPageLayout/Experience/ExperienceRoot';
import FooterRoot from './LandingPageLayout/Footer/FooterRoot';
import Overview from './LandingPageLayout/Overview/Overview';
import ReviewsRoot from './LandingPageLayout/Reviews/ReviewsRoot';
import ServicesRoot from './LandingPageLayout/Services/ServicesRoot';

const RootPage = () => {
    return (
        <div>

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