import { NavLink } from 'react-router-dom';

export const AuthNavigation = () => {
  return (
    <>
      <NavLink to={'/register'}>Registraition</NavLink>
      <NavLink to={'/login'}>Log in</NavLink>
    </>
  );
};
