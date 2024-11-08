import MiniDrawer from '@/components/Dashboard/Drawers/MiniDrawer';
import ResponsiveDrawer from '@/components/Dashboard/Drawers/ResponsiveDrawer';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <ResponsiveDrawer >
            {children}
        </ResponsiveDrawer >

        // <MiniDrawer>
        //     {children}
        // </MiniDrawer>
    );
};

export default DashboardLayout;