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
    const [abilities, setAbilities] = useState(null);
    useEffect(() => {
    const { token, user, abilities } = loadAuth();
    setAuthToken(token);
    setUser(user);
    setAbilities(abilities);
  }, []);

    useEffect(() => {
        if (authToken && user && abilities) {
            saveAuth({ token: authToken, user, abilities });
        }
    }, [authToken, user, abilities]);

    useEffect(() => {
        if (authToken && user && abilities) {
            saveAuth({ token: authToken, user, abilities });
        }
    }, [authToken, user, abilities]);

    const login = (token, user, abilities) => {
        console.log("Login successful:", token, user, abilities);
        setAuthToken(token);
        setUser(user);
        setAbilities(abilities);
    };

    const logout = (e) => {
        if (e) {
            e.preventDefault();
        }
        setAuthToken(null);
        setUser(null);
        setAbilities(null);
        clearAuth();
    };

    return <AuthContext.Provider value={{ authToken, user, abilities, login, logout }}>{children}</AuthContext.Provider>;
};