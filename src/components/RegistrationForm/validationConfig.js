import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  name: Yup.string('Enter your name')
    .min(3, 'Too Short!')
    .max(25, 'Too long!')
    .required("It's required!"),
  email: Yup.string().email('Invalid email').required("It's required!"),
  password: Yup.string()
    .min(7, 'Password shoud be no less than 7 symbols!')
    .required("It's required!"),
  passwordConfirm: Yup.string()
    .required("It's required!")
    .oneOf([Yup.ref('password')], 'Passwords must mutch'),
});
