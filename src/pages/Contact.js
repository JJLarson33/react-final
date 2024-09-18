import React from 'react';
import AppBar from '../components/AppBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Typography, Button } from '@mui/material';
import alien from '../images/ContactAlien.jpg';

const Contact = () => {
    
    return (
        <div>
            <AppBar title="Contact Me" />
            <Header/>
            <Container sx={{ margin: "auto" }}>
                <Typography>Unfortunately, I'm not on all the social media platforms just yet, so for now you can reach me at
                <Button                    
                    variant="contained"
                    size="medium"
                    color="text"
                    target="_top"
                    rel="noopener noreferer"
                    href={`mailto:jlarson3@mail.mccneb.edu`}
                    sx={{ marginLeft: 1, bgcolor: 'text.secondary' }}                    
                >
                    <Typography variant="button">
                        jlarson3@mail.mccneb.edu  
                </Typography>
               </Button>
               </Typography>
            </Container>
            <Container component="img" src={alien} sx={{ margin: "auto" }}></Container>
            <Footer/>        
        </div>
    );
};

export default Contact;