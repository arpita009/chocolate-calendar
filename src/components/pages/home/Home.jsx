//Created Home Page
import React,{useState} from 'react';
import { TextField, Button,Typography } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import dateFormatting from './helperFunctions/dateFormatting';
import { useHistory } from "react-router"; 

const Home =(props)=>{
    const [name, setName] =useState('')
    const [startDate, setStartDate] = React.useState(new Date());
    const [formErrors, setFormErrors] = useState({}) //state variable to track form errors
    const errors={} //local error variable
    const history=useHistory()
    const handleChange = (e) => {
        setName(e.target.value);
    };
    const runValidations = () => {
        //run form validations
        if (typeof name.trim() !== "string") {
          errors.name = "Enter valid name";
        }
        console.log("date type", typeof startDate, startDate);
        if (startDate==='null') {
          console.log("Date", startDate);
          errors.startDate = "Start date mandatory";
        }
    };
    const handleSubmit = (e) => { 
        e.preventDefault();
        runValidations();
        console.log('Inside hand')
        if (Object.keys(errors).length === 0) {
          setFormErrors({});
          const day = dateFormatting(startDate);
          const formData = {
            name,
            day
          };
          console.log("formData", formData);
        //   redirect to chocolate calendar page on form submission
          history.push("/chocolateCalendar");
        } else {
          console.log("formErrors", errors);
          setFormErrors(errors);
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <TextField
                // required
                margin="normal"
                required
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
                inputFormat="MM/dd/yyyy"
                label="Start date"
                value={startDate}
                onChange={(startDate) => {
                    setStartDate(startDate);
                }}
                renderInput={(params) => <TextField {...params} />}
                />
            <br />
            </LocalizationProvider>
            <Button variant='contained' type='submit'>Submit</Button>
        </form>
    );
}
export default Home;