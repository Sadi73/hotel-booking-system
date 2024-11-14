"use client"

import React, { createContext, useEffect, useState } from 'react';

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {

    const authInfo = JSON.parse(localStorage.getItem('authInfo'));
    const [isAuthenticated, setIsAuthenticated] = useState(authInfo ? true : false);

    return (
        <authContext.Provider value={{ authInfo, isAuthenticated, setIsAuthenticated }}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;