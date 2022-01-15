//redux store configuration
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../components/pages/home/userSlice';

export const store = configureStore({
  reducer: {
    user1: userReducer,
  },
});
