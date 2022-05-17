import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';

export const StyledNavigationLink = ({ toPath, name }) => {
  return (
    <Typography
      variant="h6"
      component={NavLink}
      sx={{ flexGrow: 1, textDecoration: 'none' }}
      color="white"
      to={toPath}
    >
      {name}
    </Typography>
  );
};
