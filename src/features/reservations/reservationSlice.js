import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchReservations = (userId) => createAsyncThunk('reservations/fetchreservation',
  async () => {
    const apiUrl = `http://localhost:3000/api/v1/users/${userId}/reservations`;
    const res = await fetch(apiUrl);
    const data = res.json();
    return data;
  });

const options = {
  name: 'reservations',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchReservations.fulfilled]: (state, action) => action.payload,
  },
};

const reservationSlice = createSlice(options);
export default reservationSlice.reducer;
export const selectReservations = (state) => state.reservations;
