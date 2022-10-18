import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../features/events/eventSlice';
import register from '../features/user/RegistrationLoginSlice';

import reservationReducer from '../features/reservations/reservationSlice';

const store = configureStore({
  reducer: {
    event: eventReducer,
    user: register,
    reservation: reservationReducer,

  },
});

export default store;
