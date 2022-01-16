import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ShowTable=(props)=>{
    const {header,tableInfo} =props
    const getStatus=(status)=>{
        switch(status){
            case 0:{
                return 'Not Available';
            }
            case 1:{
                return 'Available';
            }
            case 3:{
                return 'Slot open';
            }
            case 4:{
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