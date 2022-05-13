import { combineReducers } from '@reduxjs/toolkit';
import { filterSlice } from './app/filter';
import { contactsApi } from './app/contacts';
export const rootReducer = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  filter: filterSlice.reducer,
});
