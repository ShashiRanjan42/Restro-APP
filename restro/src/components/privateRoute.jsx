import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {jwtDecode} from 'jwt-decode'; // No need for curly braces

// Private route for authenticated users
const PrivateRoute = ({ element: Component }) => {
  const token = useSelector((state) => state.auth.token);
  return token ? <Component /> : <Navigate to="/login" />;
};

// Normal route that redirects authenticated users to home if trying to access login or signup
const NormalRoute = ({ element: Component }) => {
  const token = useSelector((state) => state.auth.token);
  return token ? <Navigate to="/" /> : <Component />;
};

// Private route for admin users
const PrivateRouteAdmin = ({ element: Component }) => {
  const token = useSelector((state) => state.auth.token);
  let userRole = null;

  if (token) {
    try {
      // Decode the token and extract the role
      const decodedToken = jwtDecode(token);
      userRole = decodedToken.role;
    } catch (error) {
      throw new Error("Invalid token");
    }
  }

  // Check if the user has the role 'admin'
  return token && userRole === 'admin' ? <Component /> : <Navigate to="/" />;
};

export { PrivateRouteAdmin, PrivateRoute, NormalRoute };
