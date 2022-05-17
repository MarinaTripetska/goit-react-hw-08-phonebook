import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required("It's required!"),

  password: Yup.string()
    .min(7, 'Password shoud be no less than 7 symbols!')
    .required("It's required!"),
});
