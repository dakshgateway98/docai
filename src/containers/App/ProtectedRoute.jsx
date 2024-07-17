import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { routes } from '../../utils';
import _ from 'lodash';
import { desiredPath } from '../../helpers/constant';

const ProtectedRoute = ({
  isLoggedIn,
  redirectPath = routes.LOGIN,
  children,
}) => {
  if (!isLoggedIn) {
    const { pathname, search } = window.location;
    sessionStorage.setItem(desiredPath, pathname + search);

    return <Navigate to={redirectPath} replace />;
  } else {
    sessionStorage.removeItem(desiredPath);
  }

  return children;
};

export default ProtectedRoute;
