import AccomodationRoot from "@/components/LandingPageLayout/Accomodation/AccomodationRoot";
import Banner from "@/components/LandingPageLayout/BannerSection/Banner";
import CheckAvailability from "@/components/LandingPageLayout/BannerSection/CheckAvailability";
import ExperienceRoot from "@/components/LandingPageLayout/Experience/ExperienceRoot";
import FooterRoot from "@/components/LandingPageLayout/Footer/FooterRoot";
import Overview from "@/components/LandingPageLayout/Overview/Overview";
import ReviewsRoot from "@/components/LandingPageLayout/Reviews/ReviewsRoot";
import ServicesRoot from "@/components/LandingPageLayout/Services/ServicesRoot";

export default function Home() {
  return (
    <div className="font-serif">

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

        <FooterRoot />
      </div>
    </div>
  );
}
