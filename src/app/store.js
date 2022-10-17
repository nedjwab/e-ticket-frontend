import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../features/events/eventSlice';
import register from '../features/user/RegistrationLoginSlice';

const store = configureStore({
  reducer: {
    event: eventReducer,
    user: register,
  },
});

export default store;
