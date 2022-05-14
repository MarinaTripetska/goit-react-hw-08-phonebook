import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterValue(s, action) {
      return action.payload;
    },
  },
});
export const { filterValue } = filterSlice.actions;
