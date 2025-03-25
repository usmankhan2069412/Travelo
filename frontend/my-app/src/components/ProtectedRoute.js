// ProtectedRoute.js
import React, { useContext } from 'react';
import { AuthContext } from './Context/AuthContext.js';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { token } = useContext(AuthContext);
    
    // Check both context token and localStorage for authentication
    const isAuthenticated = token || localStorage.getItem('token');

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;  // Replace in history stack
    }

    return children;
};

export default ProtectedRoute;
