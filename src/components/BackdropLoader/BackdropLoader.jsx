import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export const SimpleBackdrop = () => {
  return (
    <Backdrop
      sx={{
        color: 'rgba(250, 252, 255, 0.261)',
        zIndex: theme => theme.zIndex.drawer + 1,
      }}
      open={true}
    >
      <CircularProgress color="secondary" />
    </Backdrop>
  );
};
