import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isAuth = localStorage.getItem('isAuthenticated');
    return isAuth ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
