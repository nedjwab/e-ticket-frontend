import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://radiant-island-08872.herokuapp.com/api/v1/events';

export const fetchEvents = createAsyncThunk('event/fetchevent',
  async () => {
    const res = await fetch(apiUrl);
    const data = res.json();
    return data;
  });

const options = {
  name: 'event',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchEvents.fulfilled]: (state, action) => action.payload,
  },
};

const eventSlice = createSlice(options);
export default eventSlice.reducer;
export const selectEvents = (state) => state.event;
