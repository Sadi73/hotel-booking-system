"use client"

import React, { createContext, useEffect, useState } from 'react';

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [authInfo, setAuthInfo] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Initialize authInfo from localStorage if available
        const storedAuthInfo = localStorage.getItem('authInfo');
        if (storedAuthInfo) {
            const parsedAuthInfo = JSON.parse(storedAuthInfo);
            setAuthInfo(parsedAuthInfo);
            setIsAuthenticated(true);
        }
    }, []);

    useEffect(() => {
        // Update localStorage and isAuthenticated when authInfo changes
        if (authInfo) {
            localStorage.setItem('authInfo', JSON.stringify(authInfo));
            setIsAuthenticated(true);
        } else {
            localStorage.removeItem('authInfo');
            setIsAuthenticated(false);
        }
    }, [authInfo]);

    return (
        <authContext.Provider value={{ authInfo, isAuthenticated, setAuthInfo, setIsAuthenticated }}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
