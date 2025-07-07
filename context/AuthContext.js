'use client'
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
    setAuthToken(token);
    setUser(user);
  }, []);

    useEffect(() => {
        if (authToken && user) {
            saveAuth({ token: authToken, user });
        }
    }, [authToken, user]);

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

    return <AuthContext.Provider value={{ authToken, user, login, logout }}>{children}</AuthContext.Provider>;
};