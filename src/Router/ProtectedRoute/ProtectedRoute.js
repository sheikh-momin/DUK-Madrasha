import React, { useContext } from 'react';
import {AuthContext} from '../../Contexts/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  
  if (loading) {
    return <Loader></Loader>
  }
    if (user) {
      return children;
    }
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
    
 
};

export default ProtectedRoute;