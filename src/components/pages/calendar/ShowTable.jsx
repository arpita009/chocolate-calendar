import React from "react";
import { Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper } from "@mui/material";
import {calendarStatus} from "./calendarSlice";

const ShowTable=(props)=>{
    const {header,tableInfo} =props;
    const getStatus=(status)=>{
        switch(status){
            case calendarStatus.NotAvailable:{
                return 'Not Available';
            }
            case calendarStatus.Available:{
                return 'Available';
            }
            case calendarStatus.Open:{
                return 'Opened';
            }
            case calendarStatus.Eaten:{
                return 'Empty!';
            }
            default:{
                return 'Undefined';
            }
        }
    }
    const getColor=(status)=>{
        if(status===0){
            return <TableCell align="right" sx={{backgroundColor: 'pink'}}>{getStatus(status)}</TableCell>
        }else if(status===1){
            return <TableCell align="right" sx={{backgroundColor: 'yellow'}}>{getStatus(status)}</TableCell>
        }else if(status===2){
            return <TableCell align="right" sx={{backgroundColor: 'green', color: 'white'}}>{getStatus(status)}</TableCell>
        }else if(status===3){
            return <TableCell align="right" sx={{backgroundColor: 'red'}}><strong>{getStatus(status)}</strong></TableCell>
        }
    }
    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 30 }} size="small" aria-label="a dense table">
                <TableHead sx={{background: '#a8d2ed'}}>
                    <TableRow>
                        {header.map((eachHeading,idx)=>{
                            return <TableCell key={idx}>{eachHeading}</TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableInfo.map((row) => (
                        <TableRow
                            key={row.day}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.day}
                            </TableCell>
                            {getColor(row.status)}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    )
}
export default ShowTable;