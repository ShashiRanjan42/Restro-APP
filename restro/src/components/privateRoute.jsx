import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element: Component }) => {
  const token = useSelector((state) => state.auth.token);

  return token ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
