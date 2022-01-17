// create Calendar page
import React,{useEffect, useState} from 'react';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, CalendarPicker } from "@mui/lab";
import { useSelector,useDispatch } from 'react-redux';
import { selectDay, selectMonth, selectYear,selectName } from '../home/userSlice';
import getDayInfo from '../home/helperFunctions/getDayInfo';
import { Box,Typography,Button,Grid } from '@mui/material'
import ShowTable from './ShowTable';
import getFormatDate from '../home/helperFunctions/getFormatDate';
import {initializeCalendarStatus,selectDayStatus,setStatusNotAvailableToAvailableOnNextDay,calendarDateChange} from './calendarSlice'
import BoxTextAlignStyle from './styles/BoxTextAlignStyle';


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
        console.log('handleDateChange',value.getDate());
        dispatch(calendarDateChange(value.getDate()));
        setSelectedDate(value.getDate());
    };

    const handleNextDay=()=>{
        dispatch(setStatusNotAvailableToAvailableOnNextDay(selectCurrentDate.getDate()));
        setSelectCurrentDate(new Date(selectCurrentDate.getFullYear(),selectCurrentDate.getMonth(),selectCurrentDate.getDate()+1));
    };

    return(
        <Box>
            <BoxTextAlignStyle>
                <Typography >
                    You selected <strong>{getFormatDate(selectCurrentDate)}</strong> as current date.
                </Typography>
                <Button variant='contained' onClick={handleNextDay}>Next Day</Button>
            </BoxTextAlignStyle>
            
            <Grid container spacing={35} direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>
                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                        <CalendarPicker 
                            onChange={(value)=>handleDateChange(value)} 
                            maxDate={getMaxDate()}
                            minDate={getMinDate()}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item>
                <Grid container>
                    <ShowTable header={['Day','Status']} tableInfo={dayStatus}/>
                 </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
export default Calendar;