// create calendar actions based on reducer functions

import {  createSlice } from '@reduxjs/toolkit';

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
            const resultRows=slNos.map(day=>(day>eachDayStatus.userSelectedDay) ? ({day,status:0}): ({day,status:1}));
            // 0 represents 'Not available' for future dates
            // 1 represents 'Available' (current day + past days)
            console.log('resultRows',resultRows);

        }
    }
})
export const {initializeCalendarStatus} =calendarSlice.actions;
export default calendarSlice.reducer; 