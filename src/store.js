import { configureStore } from '@reduxjs/toolkit';
import slice from './slice';
import userReducer from './components/pages/home/userSlice';
import calendarReducer from './components/pages/calendar/calendarSlice';

export default configureStore({
  reducer: {
    slice: slice.reducer,
    user: userReducer,
    calendar: calendarReducer,
  },
});
