import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import AppBar from '../components/AppBar';
import { TextField, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const ProjectUpsert = (props) => {

    const { id } = props.match.params;
    const apiUrl = 'http://localhost:3001/projects';

    const [ inputData, setInputData ] = useState({title: '', 
                                                  creator: '', 
                                                  shortDescription: ''}); 

    const history = useHistory();

    const { handleSubmit, control, reset, setValue } = useForm({defaultValues: inputData});
    
    useEffect( () => {
        console.log("useEffect: ", inputData);
        
        if (id) {
            const getApiData = () => {
                fetch(apiUrl + '/' + id, {method: "GET"})
                    .then(response => response.json())
                    .then(data => loadData(data));
            };
            getApiData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const loadData = (data) => {
        console.log('loadData:', data);
        setInputData(data);
        reset({
            title: data.title,
            creator: data.creator,
            shortDescription: data.shortDescription            
        });
    };

    const onSubmit = data => {
        let method = "GET";
        let url = "";
                
        if (!id) {
            method = "POST";
            url = apiUrl;
            
        } else {
            method = "PUT";
            url = apiUrl + '/' + id;
        }

        fetch(url,
                {method: method,
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
        )
        .then(response => response.json())
        .then(data => loadData(data))
        .then(res => {
            history.push("/admin");
        });
    };

    return (
        <>
            <AppBar title="Project Edit" />
            <div style={{width: "50%", margin: "auto", paddingTop: 20}}>
                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Controller name="title" control={control} setValue={setValue} render={({field}) => (
                            <TextField sx={{mb: 1}} label="Title" fullWidth {...field} />
                        )} />
                        <Controller name="creator" control={control} setValue={setValue} render={({field}) => (
                            <TextField sx={{mb: 1}} label="Creator" fullWidth {...field} />
                        )} />                        
                        <Controller name="shortDescription" control={control} setValue={setValue} render={({field}) => (
                            <TextField sx={{mb: 1}} label="Short Description" fullWidth value={inputData.shortDescription} {...field}/>
                        )} />                       
                        <Button variant="contained" color="text" type="submit" sx={{bgcolor:"text.secondary"}}>Submit</Button>
                    </div>
                </form>
            </div>
        </>
    );

}

export default ProjectUpsert;