import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Container sx= {{pt: 8 }}>
            <footer>
                <Typography sx={{pl: 50}} ><CopyrightIcon/> Jonah J. Larson | 2023</Typography> 
            </footer>
        </Container>
    );
  }

  export default Footer;