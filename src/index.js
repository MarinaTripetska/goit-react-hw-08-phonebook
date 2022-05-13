import React from 'react';
import GlobalStyle from './GlobalStyles';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// import {PersistGate} from 'redux-persist/integration/react'

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <>
    <React.StrictMode>
      <GlobalStyle />
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
        {/* </PersistGate> */}
      </Provider>
    </React.StrictMode>
  </>
);
