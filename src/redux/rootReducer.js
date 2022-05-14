import { combineReducers } from '@reduxjs/toolkit';
import { filterSlice } from './app/filter';
import { contactsApi } from './app/contacts';
import { authSlice } from './app/authorization';
export const rootReducer = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  filter: filterSlice.reducer,
  auth: authSlice.reducer,
});
