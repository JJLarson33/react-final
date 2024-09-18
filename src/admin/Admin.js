import React, { useState, useEffect } from 'react';
import AppBar from '../components/AppBar';
import { Button, Container } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Admin = () => {

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

    const getId = (params) => {
        return `${params.id}`;
    }

    const handleCreate = () => {
        history.push("/project/add");
    }

    const handleEdit = (e) => {
        const itemId = e.currentTarget.parentElement.parentElement.getAttribute('data-id');
        console.log('edit item:' + itemId);
        history.push("/project/edit/" + itemId);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        const itemId = e.currentTarget.parentElement.parentElement.getAttribute('data-id');
        console.log('delete item:' + itemId);
        fetch(apiUrl + '/' + itemId, {method: "DELETE"})
            .then(response => response.json())
            .then(res => {
                getApiData();
            });
    };

    const columns = [
        {field: "title", headerName: "Title", width: 200, editable: true},
        {field: "creator", headerName: "Creator", width: 200, editable: true},    
        {field: "shortDescription", headerName: "Short Description", width: 300, editable: true},
        {field: 'Edit', headerName: 'Edit', width: 200, valueGetter: getId, renderCell:
        (params) => (
            <>
                <Button variant="contained" color="text" size="small" onClick={handleEdit} sx={{bgcolor: 'text.secondary'}}>Edit</Button>
                <Button variant="contained" color="error" size="small" onClick={handleDelete}>Delete</Button>
            </>
        )}    
    ];    

    return (
        <>
            <AppBar title="Admin" />
            <Header />
            <Container>                
                <div style={{height: 600, width: "85%", pt: 8}}>
                    <Button variant="contained" color="text" sx={{ mb: 1, mt: 1, bgcolor: 'text.secondary' }} onClick={handleCreate}>Add Project</Button>
                    <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
                </div>            
            </Container>                        
            <Footer/>
        </>        
    );
}

export default Admin;