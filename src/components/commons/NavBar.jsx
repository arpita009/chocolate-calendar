import React from 'react';
import { Box } from '@mui/system';
import { AppBar, Toolbar, Typography } from '@mui/material';


const Navbar = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    Chocolate Calendar
                </Typography>
                
            </Toolbar>
        </AppBar>
    </Box>
)
}

export default Navbar