import React from 'react';
import AppBar from '../components/AppBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Typography } from '@mui/material';
import alien from '../images/AboutAlien.jpg';

const About = () => {

    return (
        <div>
            <AppBar title="About" /> 
            <Header/>
            <Container sx={{ margin: "auto" }}>
                <Typography>Greetings to all the internet travellers! This bare bones place on the web is a work in progress by me, Jonah James Larson.
                    Bear with me as I learn to develop not only functional pieces of this website, but the content itself. I know it's bare but that's how beginnings start!               </Typography>                
            </Container>
            <Container component="img" src={alien} sx={{ margin: "auto" }}></Container>
            <Footer/>       
        </div>
    );
};

export default About;