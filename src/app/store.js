import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../features/events/eventSlice';
import reservationReducer from '../features/reservations/reservationSlice';

const store = configureStore({
  reducer: {
    event: eventReducer,
    reservation: reservationReducer,
  },
});

export default store;
