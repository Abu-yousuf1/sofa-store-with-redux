
import React, { useState } from 'react';
import { Box, CardContent, CardMedia, Grid, IconButton, Paper, Typography, Card, Divider, Button } from '@mui/material';
import Navigation from '../../shared/Navigation/Navigation';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useSelector, useDispatch } from 'react-redux';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteProduct, addTotal } from '../../../Redux/cartRedux';
import { ConnectingAirportsOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';





const Cart = () => {
    const cart = useSelector(state => state.cart.cart)

    const subTotal = cart.reduce((a, b) => a + b.price * b.quantity, 0);
    const dispatch = useDispatch()

    let text;

    if (subTotal > 0) {
        text = 10
    }

    console.log(cart.length, 'length of cart')
    let total = parseInt(subTotal + text)
    total = total ? total : 0
    text = text ? text : 0

    const handleDelete = (pd) => {

        dispatch(deleteProduct(pd))
    }
    const handleProceed = () => {
        dispatch(addTotal(total))
    }

    return (
        <Box>
            <Navigation />
            <Box style={{ marginTop: "100px" }}>
                <Typography sx={{ textAlign: "center" }} variant="h4">YOUR BAG</Typography>
                {!cart.length ? <Box>
                    <Typography variant='h4' sx={{ textAlign: 'center', color: '#004d40', mt: 10 }}>You are not select any product .</Typography>
                </Box>
                    : <Grid container spacing={2} style={{ marginTop: '50px' }}>
                        <Grid item xs={12} md={8}>
                            {cart.map(pd =>
                                <Box style={{ borderBottom: "1px solid gray", marginBottom: '15px' }}>
                                    <Card sx={{
                                        display: 'flex', flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" },
                                        justifyContent: { xs: "center", sm: "center", md: 'center', lg: "space-between" },
                                        alignItems: { xs: "center", sm: "center", md: 'center', lg: "space-between" },

                                        paddingY: '20px'
                                    }}>

                                        <Box sx={{ display: 'flex' }}>
                                            <CardMedia
                                                component="img"
                                                sx={{ width: 151 }}
                                                image={pd.image}
                                                alt="Live from space album cover"
                                            />
                                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                                                <CardContent sx={{ flex: '1 0 auto' }}>
                                                    <Typography component="div" variant="h5">
                                                        {pd.name}
                                                    </Typography>
                                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                                        Id:{pd._id}
                                                    </Typography>
                                                </CardContent>
                                            </Box>
                                        </Box>


                                        <Box sx={{ marginTop: { xs: "30px", sm: "30px", md: 0, lg: 0 } }}>
                                            <Box >
                                                {/* <RemoveOutlinedIcon onClick={() => handleQuantity("dec")} /> */}
                                                <Paper variant="outlined" square elevation={3} sx={{ padding: '10px', color: "black", fontWeight: "bold" }} >Quantity: {pd.quantity}</Paper>
                                                {/* <AddOutlinedIcon onClick={() => handleQuantity("inc")} /> */}
                                            </Box>
                                            <Typography variant="h5" sx={{ marginTop: '10px' }}> $ {parseInt(pd.price * pd.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>

                                            <Button onClick={() => handleDelete(pd)} variant="contained" color="error" sx={{ margin: '10px 0 0 0' }}>REMOVE</Button>
                                        </Box>



                                    </Card>

                                </Box>


                            )}

                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper variant="outlined">
                                <TableContainer component={Paper}>
                                    <Table sx={{}} aria-label="spanning table">
                                        <TableHead>
                                            <Typography sx={{ textAlign: "center", margin: "10px 0" }} variant="h5">ORDER SUMMARY</Typography>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>

                                                <TableCell >Subtotal</TableCell>
                                                <TableCell align="right">${subTotal}</TableCell>
                                            </TableRow>
                                            <TableRow>

                                                <TableCell>Tax</TableCell>
                                                <TableCell align="right">${text}</TableCell>


                                            </TableRow>

                                            <TableRow >
                                                <TableCell sx={{ fontWeight: "bold" }} >Total</TableCell>
                                                <TableCell sx={{ fontWeight: "bold" }} align="right">${parseInt(total)}</TableCell>
                                            </TableRow>
                                            <Box sx={{ justifyContent: 'center', marginTop: "30px", marginLeft: "110px" }}>
                                                <Link to="/checkout" style={{ textDecoration: 'none' }}> <Button onClick={handleProceed} variant="contained" sx={{ justifyContent: 'center', backgroundColor: '#F37539 ', }}>PROCEED TO CHECKOUT</Button></Link>
                                            </Box>

                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        </Grid>

                    </Grid>}
            </Box>
        </Box>
    );
};

export default Cart;    