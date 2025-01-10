import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { isSignedIn } = useAuth();

  return isSignedIn ? <Component {...rest} /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;