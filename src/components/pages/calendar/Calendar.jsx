// create Calendar page
import React,{useState} from 'react';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, CalendarPicker } from "@mui/lab";
import { useSelector } from 'react-redux';
import { selectDay, selectMonth, selectYear,selectName } from '../home/userSlice';

const Calendar =(props)=>{
    const[selectedDate, setSelectedDate]= useState(0);
    const day=useSelector(selectDay);
    const month=useSelector(selectMonth);
    const year=useSelector(selectYear);
    const name=useSelector(selectName);
    const handleDateChange=(value)=>{
        console.log('value',value.getDate());
        setSelectedDate(value.getDate());
    };
    return(
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CalendarPicker 
                onChange={(value)=>handleDateChange(value)} 
            />
        </LocalizationProvider>
    )
}
export default Calendar;