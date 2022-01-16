// create Calendar page
import React,{useEffect, useState} from 'react';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, CalendarPicker } from "@mui/lab";
import { useSelector,useDispatch } from 'react-redux';
import { selectDay, selectMonth, selectYear,selectName } from '../home/userSlice';
import getDayInfo from '../home/helperFunctions/getDayInfo';
import { Box,Typography,Button } from '@mui/material'
import ShowTable from './ShowTable';
import getFormatDate from '../home/helperFunctions/getFormatDate';
import {initializeCalendarStatus,selectDayStatus,setStatusNotAvailableToAvailableOnNextDay} from './calendarSlice'

const Calendar =(props)=>{
    // Declare State Variables
    /*
    selectedDate state variable to tracks selected date from the calender. 
    */  
    const[selectedDate, setSelectedDate]= useState(0);
    /*
    selectCurrentDate state variable to track current Date selected from home screen. 
    */
    const[selectCurrentDate,setSelectCurrentDate]=useState(new Date());
    // Declare Local Variables
    const dayStatus=useSelector(selectDayStatus);
    const userSelectedDate={day:useSelector(selectDay),month:useSelector(selectMonth),year:useSelector(selectYear)};
    const dispatch= useDispatch();

    useEffect(()=>{
        const formData={userSelectedDay:userSelectedDate.day,maxDays:getDayInfo(userSelectedDate.year,userSelectedDate.month)};
        setSelectCurrentDate(new Date(userSelectedDate.year,userSelectedDate.month,userSelectedDate.day));
        dispatch(initializeCalendarStatus(formData));
    },[]);

    const getMaxDate=()=>{
        return new Date( userSelectedDate.year,userSelectedDate.month,getDayInfo(userSelectedDate.year,userSelectedDate.month));
    };

    const getMinDate=()=>{
        return new Date(userSelectedDate.year,userSelectedDate.month,1);
    };

    const handleDateChange=(value)=>{
        setSelectedDate(value.getDate());
    };

    const handleNextDay=()=>{
        setSelectCurrentDate(new Date(selectCurrentDate.getFullYear(),selectCurrentDate.getMonth(),selectCurrentDate.getDate()+1));
        // dispatch(setStatusNotAvailableToAvailableOnNextDay())
    };

    return(
        <Box>
            <Typography>
                You selected <strong>{getFormatDate(selectCurrentDate)}</strong> as current date.
            </Typography>
            <Button variant='contained' onClick={handleNextDay}>Next Day</Button>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <CalendarPicker 
                    onChange={(value)=>handleDateChange(value)} 
                    maxDate={getMaxDate()}
                    minDate={getMinDate()}
                />
            </LocalizationProvider>
            <ShowTable header={['Day','Status']} tableInfo={dayStatus}/>
        </Box>
    )
}
export default Calendar;