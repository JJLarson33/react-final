import React from 'react';
import AppBar from '../components/AppBar';
import { Container, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import alien from '../images/HomeAlien.jpg';


const Home = props => {

    return (
        <div>
            <AppBar title="Home" />
            <Header/>
            <Container sx={{ margin: "auto" }}>
                <Typography>Embarking on a journey through lines of code and maybe one day the realm of algorithms, I exist as a determined newcomer to the world of programming. Here, amidst the virtual expanse, I invite you to explore my endeavors, triumphs, and trials as I navigate the intricate web of programming languages and software development. Critique me as I weave my story of growth, from a novice scriptwriter to an aspiring architect of innovative solutions. This is my humble sanctuary of code, my canvas of attempted creativity, and my window into a future fueled by the power of developing solutions. Welcome to my journey of bytes and brilliance.</Typography>
            </Container>
            <Container component="img" src={alien} sx={{ margin: "auto" }}></Container>
            <Footer/>
        </div>
    );
};

export default Home;