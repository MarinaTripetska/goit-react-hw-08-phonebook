import { lazy } from 'react';

const load = component => lazy(() => import(`./${component}`));

const HomePage = load('HomePage');
const PhoneBookPage = load('PhoneBookPage');
const RegistrationPage = load('RegistrationPage');
const LoginPage = load('LoginPage');

const pages = { HomePage, PhoneBookPage, RegistrationPage, LoginPage };
export default pages;
