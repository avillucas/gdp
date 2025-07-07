// context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import {
    loadAuth,
    saveAuth,
    clearAuth,
} from "../services/authStorageService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const [user, setUser] = useState(null);
    useEffect(() => {
        const { token, user } = loadAuth();
        setToken(token);
        setUser(user);
    }, []);

    useEffect(() => {
        if (token && user) {
            saveAuth({ token, user });
        }
    }, [token, user]);

    const value = {
        authToken,
        setAuthToken,
        login,
        logout
    };

    useEffect(() => {
        if (authToken && user) {
            saveAuth({ token: authToken, user });
        }
    }, [authToken, user]);

    const login = (token, user) => {
        setAuthToken(token);
        setUser(user);
    };

    const logout = (e) => {
        e.preventDefault();
        setAuthToken(null);
        setUser(null);
        clearAuth();
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};