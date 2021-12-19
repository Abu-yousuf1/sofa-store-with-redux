import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import banner from "../../../Images/banner-min.jpg"
import React from 'react';
import { height } from '@mui/system';

const Banner = () => {
    const styleBanner = makeStyles({
        bg: {
            backgroundImage: `url(${banner})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '530px',
            marginBottom: '80px'
        }
    })
    const { bg } = styleBanner()
    return (
        <Grid className={bg} container spacing={2}>
            <Grid item xs={12} md={6}>

            </Grid>
            <Grid item xs={4}>

            </Grid>

        </Grid>
    );
};

export default Banner;