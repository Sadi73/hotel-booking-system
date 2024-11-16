"use client"

import React, { createContext, useEffect, useState } from 'react';

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [authInfo, setAuthInfo] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const storedAuthInfo = localStorage.getItem('authInfo');
        if (storedAuthInfo) {
            const parsedAuthInfo = JSON.parse(storedAuthInfo);
            setAuthInfo(parsedAuthInfo);
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [isAuthenticated])

    return (
        <authContext.Provider value={{ authInfo, isAuthenticated, setAuthInfo, setIsAuthenticated }}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
