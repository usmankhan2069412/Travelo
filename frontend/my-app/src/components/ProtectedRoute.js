// ProtectedRoute.js
import React, { useContext } from 'react';
import { AuthContext } from './Context/AuthContext.js';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { token } = useContext(AuthContext);

    if (!token) {
        return <Navigate to="/login" />;  // Redirect to login if not authenticated
    }

    return children;
};

export default ProtectedRoute;
