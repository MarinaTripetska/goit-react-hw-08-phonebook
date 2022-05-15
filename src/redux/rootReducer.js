import { combineReducers } from '@reduxjs/toolkit';
import { filterSlice } from './app/filter';
import { contactsApi } from './app/contacts';
import { authSlice } from './app/authorization';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const rootReducer = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  filter: filterSlice.reducer,
  auth: persistReducer(authPersistConfig, authSlice.reducer),
});
