import { Suspense, useEffect } from 'react';
import { AppBar } from './components/AppBar';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import { myToast } from './components/Toast';
import {
  authOperations,
  authSelectors,
  reset,
} from './redux/app/authorization';
import { SimpleBackdrop } from './components/BackdropLoader';

import pages from './pages';
const { HomePage, PhoneBookPage, RegistrationPage, LoginPage } = pages;

export default function App() {
  const dispatch = useDispatch();
  const message = useSelector(authSelectors.getMessage);
  const { isLoading, isError } = useSelector(authSelectors.getOperationStatus);
  const isLoggedIn = useSelector(authSelectors.getIsLoggenIn);
  const isFetchingUser = useSelector(authSelectors.getIsFetchingUser);
  const userName = useSelector(authSelectors.getUserName);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      myToast.notifyERROR(message);
    }

    if (isLoggedIn) {
      myToast.notifySUCCESS(`Welcome, ${userName}!`);
    }

    dispatch(reset());
  }, [message, isError, dispatch, isLoggedIn, userName]);

  return (
    <>
      {!isFetchingUser && (
        <>
          <AppBar />

          <Suspense fallback={<SimpleBackdrop />}>
            <Routes>
              <Route path="/" element={<PublicRoute />}>
                <Route path="" element={<HomePage />} />
              </Route>

              <Route path="/phonebook" element={<PrivateRoute />}>
                <Route path="" element={<PhoneBookPage />} />
              </Route>

              <Route
                path="/register"
                element={<PublicRoute restricted navigateTo="/phonebook" />}
              >
                <Route path="" element={<RegistrationPage />} />
              </Route>

              <Route
                path="/login"
                element={<PublicRoute restricted navigateTo="/phonebook" />}
              >
                <Route path="" element={<LoginPage />} />
              </Route>

              <Route path="*" element={<Navigate to="/phonebook" />} />
            </Routes>
          </Suspense>
        </>
      )}

      {(isLoading || isFetchingUser) && <SimpleBackdrop />}
    </>
  );
}
