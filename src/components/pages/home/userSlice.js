// create actions in Home page based on reducer functions
import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    userName: '',
    day: 0,
    month:0,
    year:0
};
export const userSlice=createSlice({
    name: 'user',
    initialState,
    reducers: {
        submitCurrentDate: (state,action)=>{
            state.day=action.payload.day;
            state.month=action.payload.month;
            state.year=action.payload.year;
            state.userName=action.payload.name;
            console.log('useSlice',state.day,state.month, state.year,state.userName)
        }
    }
})

export const {submitCurrentDate} =userSlice.actions;
export const selectDay = (state) => state.user.day;
export const selectMonth = (state) => state.user.month;
export const selectYear = (state) => state.user.year;
export const selectName = (state) => state.user.userName;
export default userSlice.reducer; 