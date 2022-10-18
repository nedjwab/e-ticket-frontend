import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  logged_in: false,
  error: null,
};

export const registeration = createAsyncThunk(
  'user/registeration',
  ({ email, username }) => {
    const result = axios
      .post(
        `http://localhost:3000/api/v1/register/${username}/${email}`,
      )
      .then((response) => response.data);
    localStorage.setItem('user', result.data);
    return result;
  },
);

export const login = createAsyncThunk('user/login', (username) => {
  const result = axios
    .get(`http://localhost:3000/api/v1/login/${username}`)
    .then((response) => response.data);
  localStorage.setItem('user', result.data);
  return result;
});

// Fix undefined" is not valid JSON

const initialUser = localStorage.getItem('user') || '';
const CurrentActive = (initialUser.id);
current.user = CurrentActive;

const usersArray = {
  user: initialUser,
  loading: false,
  error: null,
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: {
    [registeration.fulfilled]: (state = usersArray, action) => ({
      ...state,
      user: action.payload.user,
      logged_in: action.payload.logged_in,
      error: action.payload.error,
    }),
    [registeration.rejected]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [login.fulfilled]: (state, action) => ({
      ...state,
      user: action.payload.user,
      logged_in: action.payload.logged_in,
      error: action.payload.error,
    }),
    [login.rejected]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
});

export default registerSlice.reducer;
