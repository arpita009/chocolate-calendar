//Created Home Page
import React,{useState} from 'react';
import { TextField, Button,Typography } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import { useHistory } from "react-router"; 
import {  useDispatch } from 'react-redux';
import {submitCurrentDate} from './userSlice';
import  PaperStyled from './styles/PaperStyled';

const Home =(props)=>{
    const [name, setName] =useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [formErrors, setFormErrors] = useState({}) //state variable to track form errors
    const errors={} //local error variable
    const history=useHistory();
    const dispatch=useDispatch();
    const handleChange = (e) => {
        setName(e.target.value);
    };
    const runValidations = () => {
        //run form validations
        if (typeof name.trim() !== "string") {
          errors.name = "Enter valid name";
        }
        if (startDate==='null') {
          console.log("Date", startDate);
          errors.startDate = "Start date mandatory";
        }
    };
    const handleSubmit = (e) => { 
        e.preventDefault();
        runValidations();
        if (Object.keys(errors).length === 0) {
          setFormErrors({});
          const formData = {
            name,
            day: startDate.getDate(),
            month: startDate.getMonth(),
            year: startDate.getFullYear()
          };
          console.log("formData", formData);
          dispatch(submitCurrentDate(formData))

        //   redirect to chocolate calendar page on form submission
          history.push("/chocolateCalendar");
        } else {
          console.log("formErrors", errors);
          setFormErrors(errors);
        }
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
            {/* {formErrors.name && <Typography>{formErrors.name}</Typography>} */}
            {/* {formErrors.name && <span>{formErrors.name}</span>} */}
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
            <Button variant='contained' type='submit'>Submit</Button>
          </form>
        </PaperStyled>
    );
}
export default Home;