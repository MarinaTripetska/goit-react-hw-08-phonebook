import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/app/authorization';
import AccountCircle from '@mui/icons-material/AccountCircle';

export const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Typography
        variant="h6"
        component="span"
        sx={{ flexGrow: 1, textDecoration: 'none' }}
        color="white"
      >
        {name}
      </Typography>

      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          component="button"
          type="button"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Log out
        </MenuItem>
      </Menu>
    </div>
  );
};
