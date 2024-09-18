import React, { useState, useEffect } from 'react';
import AppBar from '../components/AppBar';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Container } from '@mui/material';
import Footer from '../components/Footer';

const Projects = () => {

    const [ rows, setRows ] = useState([]);
    const apiUrl = 'http://localhost:3001/projects';
    const history = useHistory();
    

    useEffect( () => {
        
        getApiData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getApiData = () => {
        fetch(apiUrl, {method: "GET"})
            .then(response => response.json())
            .then(data => loadData(data));
    };

    const loadData = (data) => {
        setRows(data);
    };    

    const handleEdit = (e) => {
        const itemId = e.currentTarget.getAttribute('row_id');
        console.log('edit item:' + itemId);
        history.push("/project/edit/" + itemId);
    };    

    return (
        <>
            <AppBar title="Projects" />        
            <Container sx={{py: 8}} maxWidth="md">
                    <Grid container spacing = {4}>
                        {rows.map((card) => (
                            <Grid item key={card.id} xs={12} sm={6} md={4}>
                                <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                                    <CardMedia 
                                        component="img"
                                        sx={{ pt: '50%' }}
                                        image={card.mainImage}
                                        alt=""
                                        title={card.title}
                                    />
                                    <CardContent sx={{ flexGrow: 1}}>
                                        <Typography align="left" variant="h5" component="h2" gutterBottom >
                                           {card.title} 
                                        </Typography>
                                        <Typography align="left">
                                           {card.creator} 
                                        </Typography>
                                        <Typography align="left">
                                            {card.shortDescription}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>                                        
                                        <Button size="small" color="error" onClick={handleEdit} row_id={card.id}>
                                            Edit
                                        </Button>
                                    </CardActions>    
                                </Card>
                            </Grid>    
                        ))}
                    </Grid>
               </Container>
               <Footer/>            
        </>
    );
};

export default Projects;