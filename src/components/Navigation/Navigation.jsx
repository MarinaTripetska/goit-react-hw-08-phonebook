import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/app/authorization';
import { StyledNavigationLink } from '../StyledNavigationLink';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggenIn);
  return (
    <>
      <StyledNavigationLink toPath="/" name="Start page" />

      {isLoggedIn && (
        <StyledNavigationLink toPath={'/phonebook'} name="Phone Book" />
      )}
    </>
  );
};
