import { Button, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import banner from "../../../Images/banner-min.jpg"
import React from 'react';
import { height } from '@mui/system';
import { useNavigate } from "react-router-dom";

const Banner = () => {
    let navigate = useNavigate();
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
        <Grid className={bg} style={{ alignItems: 'center', paddingLeft: "20px" }} container spacing={2}>
            <Grid item xs={12} md={6}>
                <Typography sx={{ fontWeight: "bold" }} variant="h3">Sofa Collection</Typography>
                <br />
                <Typography sx={{}} variant="body3">A sofa is a long, comfortable seat with a back and usually with arms, which two or three people can sit on.</Typography>
                <br />
                <br />
                <Button onClick={() => navigate("/products")} variant="contained" style={{ backgroundColor: " #F37539" }}>SHOP NOW</Button>
            </Grid>
            <Grid item xs={4}>

            </Grid>

        </Grid>
    );
};

export default Banner;