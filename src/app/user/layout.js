import ResponsiveDrawer from '@/components/Dashboard/Drawers/ResponsiveDrawer';
import React from 'react';

const UserPanel = ({ children }) => {
    return (
        <div>
            <ResponsiveDrawer>
                {children}
            </ResponsiveDrawer>
        </div>
    );
};

export default UserPanel;