// create calendar actions based on reducer functions

import {  createSlice } from '@reduxjs/toolkit';

export const calendarStatus={NotAvailable:0, Available:1, Open:2, Eaten:3};
const initialState = {
    dayStatus: []
};

export const calendarSlice=createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        initializeCalendarStatus: (state,action)=>{
            const eachDayStatus={userSelectedDay:action.payload.userSelectedDay,maxDays:action.payload.maxDays};
            const slNos=Array.from({length: eachDayStatus.maxDays}, (_, i) => i + 1);
            const resultRows=slNos.map(day=>(day>eachDayStatus.userSelectedDay) ? ({day,status:calendarStatus.NotAvailable}): ({day,status:calendarStatus.Available}));
            state.dayStatus=[...resultRows];
        },
        setStatusNotAvailableToAvailableOnNextDay: (state,action)=>{
            const currDay=action.payload;
            state.dayStatus[currDay].status=calendarStatus.Available;            
        }
    }
})
export const {initializeCalendarStatus,setStatusNotAvailableToAvailableOnNextDay} =calendarSlice.actions;
export const selectDayStatus = (state) => state.calendar.dayStatus;
export default calendarSlice.reducer; 