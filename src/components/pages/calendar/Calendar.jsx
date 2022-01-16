// create Calendar page
import React,{useState} from 'react';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, CalendarPicker } from "@mui/lab";
import { useSelector } from 'react-redux';
import { selectDay, selectMonth, selectYear,selectName } from '../home/userSlice';
import getDayInfo from '../home/helperFunctions/getDayInfo';

const Calendar =(props)=>{
    const[selectedDate, setSelectedDate]= useState(0);
    const day=useSelector(selectDay);
    const month=useSelector(selectMonth);
    const year=useSelector(selectYear);
    const name=useSelector(selectName);

    const getMaxDate=()=>{
        console.log('getMax',getDayInfo(year,month))
        return new Date( year,month,getDayInfo(year,month));
    }
    const getMinDate=()=>{
        return new Date(year,month,1);
    }
    const handleDateChange=(value)=>{
        setSelectedDate(value.getDate());
    };
    return(
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CalendarPicker 
                onChange={(value)=>handleDateChange(value)} 
                maxDate={getMaxDate()}
                minDate={getMinDate()}
            />
        </LocalizationProvider>
    )
}
export default Calendar;