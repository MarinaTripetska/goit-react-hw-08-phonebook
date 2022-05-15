import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/app/authorization';

export const PrivateRoute = ({ navigateTo = '/login' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggenIn);
  return isLoggedIn ? <Outlet /> : <Navigate to={navigateTo} />;
};
