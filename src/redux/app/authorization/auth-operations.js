import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      token.set(data.token);
      return data;
    } catch (error) {
      if ((error.status = 400)) {
        return thunkAPI.rejectWithValue('Thomethig went wrong. Try again!');
      }
      if ((error.status = 500)) {
        return thunkAPI.rejectWithValue(
          'We have problems with server. Please, try later'
        );
      }
    }
  }
);

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    //обработка ошибки error.message
  }
});

const logOut = createAsyncThunk('auth/loout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    //обработка ошибки error.message
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      //обработка ошибки error.message
    }
  }
);

export const authOperations = { register, logIn, logOut, fetchCurrentUser };
