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
import {initializeCalendarStatus} from './calendarSlice'

const Calendar =(props)=>{
    const[selectedDate, setSelectedDate]= useState(0);
    // const[userSelectedDate, setUserSelectedDate]=useState({day:useSelector(selectDay),month:useSelector(selectMonth),year:useSelector(selectYear)});
    const userSelectedDate={day:useSelector(selectDay),month:useSelector(selectMonth),year:useSelector(selectYear)};
    const dispatch= useDispatch();
    useEffect(()=>{
        console.log('inital Render',userSelectedDate.day,getDayInfo(userSelectedDate.year,userSelectedDate.month));
        const formData={userSelectedDay:userSelectedDate.day,maxDays:getDayInfo(userSelectedDate.year,userSelectedDate.month)}
        console.log('formData',formData)
        dispatch(initializeCalendarStatus(formData));
    },[])
    const name=useSelector(selectName);

    const getMaxDate=()=>{
        console.log('getMaxDate',getDayInfo(userSelectedDate.year,userSelectedDate.month))
        return new Date( userSelectedDate.year,userSelectedDate.month,getDayInfo(userSelectedDate.year,userSelectedDate.month));
    };
    const getMinDate=()=>{
        return new Date(userSelectedDate.year,userSelectedDate.month,1);
    };
    const handleDateChange=(value)=>{
        setSelectedDate(value.getDate());
    };
    const createTableData=()=>{
        const slNos=Array.from({length: getDayInfo(userSelectedDate.year,userSelectedDate.month)}, (_, i) => i + 1);
        const resultRows=slNos.map((eachDay) =>{
            if(eachDay>userSelectedDate.day){
                return {day:eachDay,status:0};
            }else{
                return {day:eachDay,status:1};
            }
        })
        console.log('createTableData',resultRows)
        return resultRows;
    };
    const handleNextDay=()=>{
        console.log('Next')

    };
    return(
        <Box>
            <Typography>
                You selected <strong>{getFormatDate(userSelectedDate)}</strong> as current date.
            </Typography>
            <Button variant='contained' onClick={handleNextDay}>Next Day</Button>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <CalendarPicker 
                    onChange={(value)=>handleDateChange(value)} 
                    maxDate={getMaxDate()}
                    minDate={getMinDate()}
                />
            </LocalizationProvider>
            <ShowTable header={['Day','Status']} tableInfo={createTableData()}/>
        </Box>
    )
}
export default Calendar;