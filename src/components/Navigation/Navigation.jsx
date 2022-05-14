import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <NavLink to={'/'}>Main</NavLink>
      <NavLink to={'/phonebook'}>Phone Book</NavLink>
    </>
  );
};
