import { configureStore } from '@reduxjs/toolkit';
import slice from './slice';
import userReducer from './components/pages/home/userSlice';

export default configureStore({
  reducer: {
    slice: slice.reducer,
    user: userReducer,
  },
});
