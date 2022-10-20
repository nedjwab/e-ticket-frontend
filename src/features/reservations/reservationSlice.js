import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://radiant-island-08872.herokuapp.com/api/v1/users/1/reservations';

export const fetchReservations = createAsyncThunk('reservation/fetchreservation',
  async () => {
    const res = await fetch(apiUrl);
    const data = res.json();
    return data;
  });

const options = {
  name: 'reservation',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchReservations.fulfilled]: (state, action) => action.payload,
  },
};

const reservationSlice = createSlice(options);
export default reservationSlice.reducer;
export const selectReservations = (state) => state.reservation;
