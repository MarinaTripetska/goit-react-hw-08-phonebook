import { AuthNavigation } from 'components/AuthNavigation';
import { Container } from 'components/BasicStyledComponents';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { Header } from './AppBar.styled';
import { authSelectors } from 'redux/app/authorization';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggenIn);
  // const isFetchingUser = useSelector(authSelectors.getIsFetchingUser);

  return (
    <Container>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
      </Header>
    </Container>
  );
};
