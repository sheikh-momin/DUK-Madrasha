import React, { useContext } from 'react';
import {AuthContext} from '../../Contexts/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  
  if (loading) {
    return <p>loading</p>
  }
    if (user) {
      return children;
    }
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
    
 
};

export default ProtectedRoute;