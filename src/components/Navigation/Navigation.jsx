import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/app/authorization';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggenIn);

  return (
    <>
      <NavLink to={'/'}>Start Page</NavLink>
      {isLoggedIn && <NavLink to={'/phonebook'}>Phone Book</NavLink>}
    </>
  );
};
