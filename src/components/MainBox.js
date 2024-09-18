import { Box } from '@mui/material';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Admin from '../admin/Admin';
import ProjectUpsert from '../admin/projectUpsert';
import NotFound from '../pages/NotFound';
import { Route, Switch } from 'react-router-dom';

function MainBox() {
    return (
        <Box component="main" sx={{ bgcolor: 'background.paper' }}>
            <Switch>
                <Route exact from="/" render={props => <Home {...props} />} />
                <Route exact from="/contact" render={props => <Contact {...props} />} />
                <Route exact from="/about" render={props => <About {...props} />} />    
                <Route exact from="/projects" render={props => <Projects {...props} />} />
                <Route exact from="/admin" render={props => <Admin {...props} />} />                
                <Route exact from="/project/add" render={props => <ProjectUpsert {...props} /> } />
                <Route exact from="/project/edit/:id" render={props => <ProjectUpsert {...props} />} />
                <Route exact from="/project/delete/:id" render={props => <ProjectUpsert {...props} />} />
                <Route path="*" render={props => <NotFound {...props} />} />             
            </Switch>
        </Box>
    );
}

export default MainBox;
