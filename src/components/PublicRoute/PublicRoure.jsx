import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/app/authorization';

export const PublicRoute = ({ restricted = false, navigateTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggenIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={navigateTo} /> : <Outlet />;
};
