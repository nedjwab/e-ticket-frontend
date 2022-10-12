import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../features/events/eventSlice';

export default store = configureStore({
  reducer: {
    event: eventReducer,
  },
});
