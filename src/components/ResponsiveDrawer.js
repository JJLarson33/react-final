import React from 'react';
import { Drawer as MUIDrawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import CreateIcon from '@mui/icons-material/Create';
import { withRouter } from 'react-router-dom';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
    const { history } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    const itemsList = [
        {
            text: 'Home',
            icon: <HomeIcon />,
            onClick: () => history.push('/')
        }, 
        {
            text: 'Projects',
            icon: <FilePresentIcon />,
            onClick: () => history.push('/projects')
        },
        {
            text: 'Contact',
            icon: <CreateIcon />,
            onClick: () => history.push('/contact')
        }, 
        {
            text: 'About',
            icon: <PersonIcon />,
            onClick: () => history.push('/about')
        },
        {
            text: 'Admin',
            icon: <SettingsIcon />,
            onClick: () => history.push('/admin')
        },
    ];

    const drawer = (
        <div>
            <List>
                {itemsList.map((item, index) => {
                    const { text, icon, onClick } = item;
                    return (
                    <ListItem key={text} onClick={onClick}>
                        <ListItemButton>
                            { icon && <ListItemIcon>{icon}</ListItemIcon> }
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                    );
                })}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        
        <Box sx={{ display: 'flex' }}>        
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                <MenuIcon />
            </IconButton>
            </Toolbar>            
                <MUIDrawer                
                    container={container}
                    variant="temporary"                
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                >
                    {drawer}   
                </MUIDrawer>       
                <MUIDrawer
                    variant="permanent"
                    ModalProps={{
                        hideBackdrop: true,
                      }}
                    sx={{
                        display: { xs: 'none', sm: 'block'},                                
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth },
                    }}
                    open                    
                >
                    {drawer}   
                </MUIDrawer>                                        
        </Box>            
    );
}

export default withRouter(ResponsiveDrawer);