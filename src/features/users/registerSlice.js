import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  register: [],
  login: [],
  error: '',
};

export const fetchNewUser = createAsyncThunk('register/fetchNewUser', (newUser) => {
  const res = fetch('http://localhost:3001/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newUser),
  }).then((res) => res.json());
  return res;
});

export const fetchCurrentUser = createAsyncThunk('login/fetchCurrentUser', (currentUser) => {
  const res = fetch('http://localhost:3001/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(currentUser),
  }).then((res) => res.json());
  return res;
});

const registerSlice = createSlice({
  name: 'register',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchNewUser.fulfilled, (state, action) => {
      const stateFulfilled = state;
      stateFulfilled.register = action.payload;
    });

    builder.addCase(fetchNewUser.rejected, (state, action) => {
      const stateRejected = state;
      stateRejected.error = action.error.message;
    });

    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      const result = action.payload;
      const stateFulfilled = state;
      stateFulfilled.login = result;
      if (result) sessionStorage.setItem('loginToken', result.token);
    });

    builder.addCase(fetchCurrentUser.rejected, (state, action) => {
      const stateRejected = state;
      stateRejected.error = action.error.message;
    });
  },
});

const registerReducer = registerSlice.reducer;
export default registerReducer;
