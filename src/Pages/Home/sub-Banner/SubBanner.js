import { Grid } from '@mui/material';
import React from 'react';
import banner1 from '../../../Images/sub-cover-1-min.jpg'
import banner2 from '../../../Images/sub-cover-2-min.jpg'
import banner3 from '../../../Images/sofa-sub-cover-min.jpg'
import banner4 from '../../../Images/1215-min.jpg'
import './sub-Banner.css'

const SubBanner = () => {

    return (
        <>
            <Grid container >
                <Grid item xs={12} md={6} >
                    <img style={{ width: '100%', height: '100%' }} src={banner1} alt="" />
                </Grid>
                <Grid item xs={6} md={3} >

                    <img style={{ width: '100%', height: '50%', }} src={banner2} alt="" />

                    <img style={{ width: '100%', height: '50%', }} src={banner3} alt="" />

                </Grid>
                <Grid item xs={6} md={3}>
                    <img style={{ width: '100%', height: '100%' }} src={banner4} alt="" />
                </Grid>

            </Grid>


        </>
    );
};

export default SubBanner;