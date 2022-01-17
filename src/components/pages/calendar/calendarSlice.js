// create calendar actions based on reducer functions

import {  createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import { postOpen,getStatus,postClosed } from '../../../apis/calendar/calendarAPI';

export const calendarStatus={NotAvailable:0, Available:1, Open:2, Eaten:3};
const initialState = {
    dayStatus: [],
    calStatus: 'idle',
};

async function getCalendarStatus(){
    const response= getStatus();
    return response;
};
async function getStatusForDay(day){
    const calendarStatusResp= await getCalendarStatus();
    const calendarStatusData= calendarStatusResp.data;
    const findDay=calendarStatusData.find(eachDay=>eachDay && eachDay.day===day);
    
    return findDay;
};

export const setStatusAvailableToOpenAsync = createAsyncThunk(
    'calendar/postOpen',
    async (day)=>{
        const getFindDay=await getStatusForDay(day);
        if(getFindDay && getFindDay.status==='closed'){
            return 'error';
        }
        if(getFindDay && getFindDay.status==='open'){
            return day;
        }
        const response= await postOpen(day);
        if(response.status===200){
            const findDay=await getStatusForDay(day);
            if(findDay && findDay.status==='open')return day;
        }
        Swal.fire({
                icon : 'error',
                title: "Can't post",
        });
        return 'Error';
    }
);
export const setStatusOpenToClosedAsync = createAsyncThunk(
    'calendar/postClosed',
    async (day)=>{
        const getFindDay=await getStatusForDay(day);
        if(getFindDay && getFindDay.status==='empty'){
            return day;
        }
        if(getFindDay && getFindDay.status==='open'){
            return 'error';
        }
        const response= await postClosed(day);
        if(response.status===200){
            const findDay=await getStatusForDay(day);
            if(findDay && findDay.status==='empty')return day;
        }
        Swal.fire({
                icon : 'error',
                title: "Can't post",
        });
        return 'Error';
    }
);
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
            console.log('currDay',currDay);
            state.dayStatus[currDay].status=calendarStatus.Available;            
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(setStatusAvailableToOpenAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(setStatusAvailableToOpenAsync.fulfilled, (state,action) => {
            state.status = 'idle';
            const currDay = action.payload;
            state.dayStatus[currDay-1].status=calendarStatus.Open;  
          })
          .addCase(setStatusAvailableToOpenAsync.rejected, (state) => {
            state.status = 'failed';
          })

          .addCase(setStatusOpenToClosedAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(setStatusOpenToClosedAsync.fulfilled, (state,action) => {
            state.status = 'idle';
            const currDay = action.payload;
            state.dayStatus[currDay-1].status=calendarStatus.Eaten;  
          })
          .addCase(setStatusOpenToClosedAsync.rejected, (state) => {
            state.status = 'failed';
          })
    },
});

export const {initializeCalendarStatus,setStatusNotAvailableToAvailableOnNextDay} =calendarSlice.actions;
export const selectDayStatus = (state) => state.calendar.dayStatus;

export const calendarDateChange = (day) => (dispatch, getState) => {
    const dayStatus = selectDayStatus(getState());
    switch(dayStatus[day].status){
        case calendarStatus.Available:{
            dispatch(setStatusAvailableToOpenAsync(day));
            break;
        }
        case calendarStatus.NotAvailable:{
            Swal.fire({
                icon : 'error',
                title: "You have selected a future date!",
            });
            break;
        }
        case calendarStatus.Open:{
            dispatch(setStatusOpenToClosedAsync(day));
            break;
        }
        case calendarStatus.Close:{
            Swal.fire({
                icon : 'error',
                title: "You have already eaten!",
            });
            break;
        }
        default:{
            console.log('Can not update!');
            break;
        }
    }
};

export default calendarSlice.reducer; 