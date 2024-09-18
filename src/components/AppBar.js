import React from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';


const drawerWidth = 240;

const AppBar = props => {
    const {title} = props;    

    return (
        <MuiAppBar           
            position="fixed"
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, bgcolor: 'text.secondary' }}
            
        >            
            <Toolbar>                
                <Typography variant="h6" component="h2" color="inherit" noWrap >
                    {title}
                </Typography>
            </Toolbar>
        </MuiAppBar>
    );
};

export default AppBar;

