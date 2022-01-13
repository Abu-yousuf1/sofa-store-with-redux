import React from 'react';
import { Typography, Grid, Container, Box, Button } from '@mui/material';
import banner from '../../../Images/about-banner.png';


const About = () => {
    return (
        <Container>
            <Grid container sx={{ marginY: '100px', paddingLeft: '10px' }}>
                <Grid item xs={12} md={6}>
                    <img src={banner} style={{ width: '100%' }} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>ABOUT US</Typography>
                    <Typography variant="body3">The Sofa & Chair Company is the UK’s leading manufacturer of luxury sofas and bespoke furniture for both commercial and retail application. All of our luxury furniture is handcrafted using kiln-dried hardwood timbers. Our top quality, solid beech wood frames are guaranteed for 15 years for lasting assurance.</Typography>
                    <Box sx={{ mt: 3 }}>
                        <Typography variant="h6"><span style={{ fontWeight: 'bold' }}> &#10003; </span>Perfect Money saver. </Typography>
                        <Typography variant="h6"><span style={{ fontWeight: 'bold' }}> &#10003; </span>Year of Foundation. </Typography>
                        <Typography variant="h6"><span style={{ fontWeight: 'bold' }}> &#10003; </span>World Wide services. </Typography>
                    </Box>
                    <Button variant="contained" style={{ backgroundColor: '#F37539', margin: '10px 0 0 10px' }}>Reade More</Button>
                </Grid>
            </Grid>


        </Container>
    );
};

export default About;