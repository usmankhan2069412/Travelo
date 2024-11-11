import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        // Check localStorage for token on initial load
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const register = async (username, phone, email, password) => {
        try {
            await axios.post('http://localhost:5000/api/account/signup', {
                username,
                phone,
                email,
                password,
            });
        } catch (error) {
            console.error('Registration error:', error.response?.data || error.message);
        }
    };

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:5000/api/account/login', { email, password });
            const token = response.data.token;
            setToken(token);
            localStorage.setItem('token', token); // Save token in localStorage
        } catch (error) {
            console.error('Login error:', error.response?.data || error.message);
        }
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token'); // Clear token from localStorage
    };

    return (
        <AuthContext.Provider value={{ token, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
