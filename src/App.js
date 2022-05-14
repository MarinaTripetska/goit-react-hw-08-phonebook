import { Suspense, lazy } from 'react';
import { AppBar } from './components/AppBar';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { HomePage, PhoneBookPage, LoginPage, RegistrationPage } from './pages';

const load = component => lazy(() => import(`./pages/${component}`));

const HomePage = load('HomePage');
const PhoneBookPage = load('PhoneBookPage');
const RegistrationPage = load('RegistrationPage');
const LoginPage = load('LoginPage');

export default function App() {
  return (
    <>
      {/* <AppBar /> */}

      <Suspense fallback={<p>...loading</p>}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route path="/" index element={<HomePage />} />
            <Route path="phonebook" element={<PhoneBookPage />} />
            <Route path="register" element={<RegistrationPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}
