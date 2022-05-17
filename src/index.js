import React from 'react';
import GlobalStyle from './GlobalStyles';
import App from './App';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { Toaster } from 'react-hot-toast';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { theme } from 'components/ColorTheme';
import { ThemeProvider } from '@mui/material';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook/">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
            <Toaster />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
