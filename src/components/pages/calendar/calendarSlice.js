// create calendar actions based on reducer functions

import {  createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import {postOpen,getStatus} from '../../../apis/calendar/calendarAPI';

export const calendarStatus={NotAvailable:0, Available:1, Open:2, Eaten:3};
const initialState = {
    dayStatus: [],
    calStatus: 'idle',
};

// export const getCalendarStatus = createAsyncThunk(
//     'calendar/getStatus',
//     async(day) =>{
//         const response=await getStatus(day);
//         console.log('response',response);
//     }
// );
async function getCalendarStatus(day){
    const response=await getStatus();
    console.log('response getCalendarStatus',response,day);
}

export const setStatusAvailableToOpenAsync = createAsyncThunk(
    'calendar/postOpen',
    async (day)=>{
        const response= await postOpen(day);
        if(response.status===200){
            const calendarStatusData=getCalendarStatus(day);
            console.log('calendarStatusData',calendarStatusData);
        }else{
            Swal.fire({
                icon : 'error',
                title: "Can't post",
            });
        }
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
            state.dayStatus[currDay].status=calendarStatus.Available;            
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(setStatusAvailableToOpenAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(setStatusAvailableToOpenAsync.fulfilled, (state) => {
            state.status = 'idle';
          })
          .addCase(setStatusAvailableToOpenAsync.rejected, (state) => {
            state.status = 'failed';
          })
        //   .addCase(getCalendarStatus.pending, (state) => {
        //     state.status = 'loading';
        //   })
        //   .addCase(getCalendarStatus.fulfilled, (state) => {
        //     state.status = 'idle';
        //   })
        //   .addCase(getCalendarStatus.rejected, (state) => {
        //     state.status = 'failed';
        //   })
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
            console.log('Sorry not available');
            break;
        }
        default:{
            console.log('Cant update!');
            break;
        }
    }
};

export default calendarSlice.reducer; 