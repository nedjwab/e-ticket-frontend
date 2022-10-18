import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../features/events/eventSlice';
import reservationReducer from '../features/reservations/reservationSlice';
import registerReducer from '../features/users/registerSlice';

const store = configureStore({
  reducer: {
    event: eventReducer,
    reservation: reservationReducer,
    userInfo: registerReducer,
  },
});

export default store;
