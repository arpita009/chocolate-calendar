//Created Home Page
import React,{useState} from 'react';
import { TextField, Button,Typography } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import { useHistory } from "react-router"; 
import {  useDispatch } from 'react-redux';
import {submitCurrentDate} from './userSlice';
import  PaperStyled from './styles/PaperStyled';
import  HomeGridStyle from './styles/HomeGridStyle';
import { Grid } from '@mui/material';

const Home =(props)=>{
    const [name, setName] =useState('')
    const [startDate, setStartDate] = useState(new Date());
    const history=useHistory();
    const dispatch=useDispatch();
    const handleChange = (e) => {
        setName(e.target.value);
    };
  
    const handleSubmit = (e) => { 
        e.preventDefault();
        const formData = {
            name,
            day: startDate.getDate(),
            month: startDate.getMonth(),
            year: startDate.getFullYear()
        }
        dispatch(submitCurrentDate(formData))

        //   redirect to chocolate calendar page on form submission
        history.push("/chocolateCalendar");
        
    };
    return(
        <PaperStyled>
          <form onSubmit={handleSubmit}>
            <TextField
                // required
                margin="normal"
                value={name}
                id="name"
                label="Enter your Name"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={handleChange}
            />
            <br />
            <br />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                required
                disableFuture
                inputFormat="dd/MM/yyyy"
                label="Start date"
                value={startDate}
                onChange={(startDate) => {
                    setStartDate(startDate);
                }}
                renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <br /><br />
            <Button variant='contained' type='submit' >Submit</Button>
          </form>
        </PaperStyled>
    );
}
export default Home;