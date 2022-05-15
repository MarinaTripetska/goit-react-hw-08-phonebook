import { Suspense, lazy, useEffect } from 'react';
import { AppBar } from './components/AppBar';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/app/authorization';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';

const load = component => lazy(() => import(`./pages/${component}`));

const HomePage = load('HomePage');
const PhoneBookPage = load('PhoneBookPage');
const RegistrationPage = load('RegistrationPage');
const LoginPage = load('LoginPage');

export default function App() {
  const dispatch = useDispatch();
  const isFetchingUser = useSelector(authSelectors.getIsFetchingUser);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingUser && (
      <>
        <AppBar />

        <Suspense fallback={<p>...loading</p>}>
          <Routes>
            <Route path="/" element={<PublicRoute />}>
              <Route path="" element={<HomePage />} />
            </Route>

            <Route path="/phonebook" element={<PrivateRoute />}>
              <Route path="" element={<PhoneBookPage />} />
            </Route>

            <Route path="/register" element={<PublicRoute restricted />}>
              <Route path="" element={<RegistrationPage />} />
            </Route>

            <Route
              path="/login"
              element={<PublicRoute restricted navigateTo="/phonebook" />}
            >
              <Route path="" element={<LoginPage />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </>
    )
  );
}
