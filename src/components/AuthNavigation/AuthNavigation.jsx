import { NavLink } from 'react-router-dom';

export const AuthNavigation = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <NavLink to={'/register'}>Registraition</NavLink>
      <NavLink to={'/login'}>Log in</NavLink>
    </div>
  );
};
