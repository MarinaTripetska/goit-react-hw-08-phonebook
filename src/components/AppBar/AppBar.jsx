import { AuthNavigation } from 'components/AuthNavigation';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { authSelectors } from 'redux/app/authorization';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggenIn);

  return (
    <>
      <header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
      </header>
      <hr />
      <Outlet />
    </>
  );
};
