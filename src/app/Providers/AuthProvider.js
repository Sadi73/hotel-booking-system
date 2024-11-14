"use client"

import React, { createContext, useEffect, useState } from 'react';

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [authInfo, setAuthInfo] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(authInfo ? true : false);

    useEffect(() => {
        setAuthInfo(JSON.parse(localStorage.getItem('authInfo')))
    }, [])

    return (
        <authContext.Provider value={{ authInfo, isAuthenticated, setIsAuthenticated }}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;