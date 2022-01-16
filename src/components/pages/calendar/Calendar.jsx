// create Calendar page
import React,{useState} from 'react';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, CalendarPicker } from "@mui/lab";
import { useSelector } from 'react-redux';
import { selectDay, selectMonth, selectYear,selectName } from '../home/userSlice';
import getDayInfo from '../home/helperFunctions/getDayInfo';
import {Box} from '@mui/material'
import ShowTable from './ShowTable';

const Calendar =(props)=>{
    const[selectedDate, setSelectedDate]= useState(0);
    const userSelectedDay=useSelector(selectDay);
    const userSelectedMonth=useSelector(selectMonth);
    const userSelectedYear=useSelector(selectYear);
    const name=useSelector(selectName);

    const getMaxDate=()=>{
        console.log('getMax',getDayInfo(userSelectedYear,userSelectedMonth))
        return new Date( userSelectedYear,userSelectedMonth,getDayInfo(userSelectedYear,userSelectedMonth));
    };
    const getMinDate=()=>{
        return new Date(userSelectedYear,userSelectedMonth,1);
    };
    const handleDateChange=(value)=>{
        setSelectedDate(value.getDate());
    };
    const createTableData=()=>{
        const slNos=Array.from({length: getDayInfo(userSelectedYear,userSelectedMonth)}, (_, i) => i + 1);
        const resultRows=slNos.map((eachDay) =>{
            if(eachDay>userSelectedDay){
                return {day:eachDay,status:0};
            }else{
                return {day:eachDay,status:1};
            }
        })
        console.log('createTableData',resultRows)
        return resultRows;
    }
    return(
        <Box>
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