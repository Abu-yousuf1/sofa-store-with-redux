import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';


const Footer = () => {
    // const style = makeStyles({
    //     bandIcon: {
    //         paddingLeft: "10px"
    //     }
    // })
    // const { bandIcon } = style()
    return (
        <Container style={{ marginTop: "100px", paddinTop: "20px" }}>

            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <img src="data:image/png;base64,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" alt="" />
                    <Typography variant="body3" sx={{ paddingTop: '10px' }} className=" mt-4 fw-bold">ANDSHOP is an multi-vendor B2C fast e-commerce company. The company mainly focuses on men,women and children wear, but it also offers other apparel, clothes, accessories, shoes, bags and other fashion items.
                    </Typography>
                    <Typography variant="h6" style={{ color: "#F37539", marginTop: "10px", fontWeight: 'bold' }}>SUBSCRIBE</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <h5 >USEFUL LINKS</h5>
                    <Link as={Link} style={{ display: 'block', textDecoration: 'none', color: "#F37539" }} to='/home'>Home</Link>
                    <Link as={Link} style={{ display: 'block', textDecoration: 'none', color: "#F37539" }} to='/products'>Products</Link>

                    {/* <Link as={Link}  style={{display:'block'}} to='/dashboard'>Dashboard</Link> */}

                </Grid>
                <Grid item xs={12} md={5}>
                    <div>
                        <img src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png" alt="" /><br />
                        <div className="text-center mt-5">
                            <i className="fab fa-facebook text-muted fs-3 " ></i>
                            <i className="fab fa-twitter text-muted ps-3 fs-3 " style={{ paddingLeft: "10px" }}></i>
                            <i className="fab fa-instagram-square text-muted ps-3 fs-3 " style={{ paddingLeft: "10px" }}></i>
                            <i className="fab fa-vimeo-v text-muted ps-3 fs-3 " style={{ paddingLeft: "10px" }}></i>
                        </div>
                    </div>
                </Grid>

            </Grid>

        </Container>
    );
};

export default Footer;