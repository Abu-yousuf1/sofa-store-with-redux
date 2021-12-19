
import React from 'react';
import { Box, CardContent, CardMedia, Grid, IconButton, Paper, Typography, Card, Divider } from '@mui/material';
import Navigation from '../../shared/Navigation/Navigation';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useSelector } from 'react-redux';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';





const Cart = () => {
    const cart = useSelector(state => state.cart)
    console.log(cart.products)
    const handleQuantity = () => {

    }
    return (
        <Box>
            <Navigation />
            <Box style={{ marginTop: "100px" }}>
                <Typography sx={{ textAlign: "center" }} variant="h4">YOUR BAG</Typography>
                <Grid container spacing={2} style={{ marginTop: '50px' }}>

                    <Grid item xs={12} md={8}>
                        {cart.products.map(pd =>
                            <Box style={{ borderBottom: "1px solid gray", marginBottom: '15px' }}>
                                <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
                                                    ID:{pd._id}
                                                </Typography>
                                            </CardContent>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box >
                                            <RemoveOutlinedIcon onClick={() => handleQuantity("dec")} /><span style={{ border: '1px solid gray', padding: '0 6px', fontWeight: "bold", position: 'relative', bottom: '8px', margin: '0 5px' }}>{pd.quantity}</span> <AddOutlinedIcon onClick={() => handleQuantity("inc")} />
                                        </Box>
                                        <Typography variant="h5" sx={{ marginTop: '20px' }}>${pd.quantity * pd.price}</Typography>
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
                                            <TableCell align="right">{cart.total}</TableCell>
                                        </TableRow>
                                        <TableRow>

                                            <TableCell>Tax</TableCell>
                                            <TableCell align="right">10</TableCell>

                                        </TableRow>
                                        <TableRow >
                                            <TableCell sx={{ fontWeight: "bold" }} >Total</TableCell>
                                            <TableCell sx={{ fontWeight: "bold" }} align="right">{cart.total + 10}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
};

export default Cart;    