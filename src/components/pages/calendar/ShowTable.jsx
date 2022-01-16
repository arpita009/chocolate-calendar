import React from "react";
import { Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper } from "@mui/material";
import {calendarStatus} from "./calendarSlice";


const ShowTable=(props)=>{
    const {header,tableInfo} =props
    const getStatus=(status)=>{
        switch(status){
            case calendarStatus.NotAvailable:{
                return 'Not Available';
            }
            case calendarStatus.Available:{
                return 'Available';
            }
            case calendarStatus.Open:{
                return 'Slot open';
            }
            case calendarStatus.Eaten:{
                return 'Chocolate Eaten';
            }
            default:{
                return 'Undefined';
            }
        }
    }
    
    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
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
                            <TableCell align="right">{getStatus(row.status)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default ShowTable;