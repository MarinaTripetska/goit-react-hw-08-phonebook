import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/app/authorization';
import { useFormik } from 'formik';
import {
  Button,
  TextField,
  Avatar,
  CssBaseline,
  Grid,
  Box,
  Typography,
  Link as MUIlink,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { SignupSchema } from './validationConfig';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const initialValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    isValid,
    errors,
    touched,
  } = useFormik({
    initialValues,
    validationSchema: SignupSchema,

    onSubmit: values => {
      const { name, email, password } = values;
      dispatch(authOperations.register({ name, email, password }));
    },
  });

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="Name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="Email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                type="password"
                name="password"
                variant="outlined"
                label="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                type="password"
                name="passwordConfirm"
                variant="outlined"
                label="Confirm Password"
                value={values.passwordConfirm}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.passwordConfirm && Boolean(errors.passwordConfirm)
                }
                helperText={touched.passwordConfirm && errors.passwordConfirm}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            startIcon={<AssignmentIndOutlinedIcon />}
            type="subbmit"
            disabled={!isValid}
          >
            SING UP
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <MUIlink variant="body2" component={Link} to="/login">
                Already have an account? Sign in
              </MUIlink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
