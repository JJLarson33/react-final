import React from 'react';
import AppBar from '../components/AppBar';
import { Container } from '@mui/material';
import alien from '../images/404AlienText.jpg';

const NotFound = () => {
    
    return (
        <div>
            <AppBar title="Ooops!"/>
                <Container component="img" src={alien} sx={{ margin: "auto" }}>
                </Container>
        </div>
                
    );
};

export default NotFound;

