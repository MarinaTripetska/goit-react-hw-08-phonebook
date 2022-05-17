import { AuthNavigation } from 'components/AuthNavigation';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/app/authorization';
import { AppBar as AppBarMUI, Box, Toolbar } from '@mui/material';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggenIn);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarMUI position="static">
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
        </Toolbar>
      </AppBarMUI>
    </Box>
  );
};
