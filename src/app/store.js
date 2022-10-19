import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../features/events/eventSlice';
import register from '../features/user/RegistrationLoginSlice';

import reservationReducer from '../features/reservations/reservationSlice';
import registerReducer from '../features/users/registerSlice';

const store = configureStore({
  reducer: {
    event: eventReducer,
    user: register,
    reservation: reservationReducer,
    userInfo: registerReducer,
  },
});

export default store;
