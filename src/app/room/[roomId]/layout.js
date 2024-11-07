import Banner from '@/components/LandingPageLayout/BannerSection/Banner';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <Banner />
            {children}
        </div>
    );
};

export default layout;