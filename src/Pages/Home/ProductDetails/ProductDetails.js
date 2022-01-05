
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, CardMedia, Typography, Rating, CardActions, Button, Paper, CircularProgress } from '@mui/material';
import Navigation from '../../shared/Navigation/Navigation'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../Redux/cartRedux';
import useAuth from '../../../hook/useAuth';

const ProductDetails = () => {
    const { id } = useParams()
    const { isLoading } = useAuth();
    // const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(addToCart({ ...product, quantity }))
    }
    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1)
        }
        else {
            setQuantity(quantity + 1)
        }
    }

    const products = useSelector((state) => state.cart.product)
    const product = products.find(pd => pd._id === id)

    return (
        <Box>
            <Navigation />
            {isLoading ? <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
                : <Box>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="100%"

                                image={product.image}
                            />
                        </Grid>
                        <Grid container sx={{ marginTop: '150px' }} item xs={12} md={6}>
                            <Box sx={{ margin: '15px' }}>
                                <Typography variant='h5'>{product.name}</Typography>
                                <br />
                                <Rating name="read-only" value={product?.rating ? product.rating : 5} readOnly />
                                <br />
                                <Typography variant="h4">${product.price}</Typography>
                                <br />
                                <Typography variant="body3" sx={{ color: "secondary" }}>{product.description}</Typography>

                                <Box style={{ marginTop: "20px" }} >
                                    <RemoveCircleIcon onClick={() => handleQuantity("dec")} /><span style={{ border: '1px solid gray', padding: '0 6px', fontWeight: "bold", position: 'relative', bottom: '8px', margin: '0 5px' }}>{quantity}</span> <AddCircleIcon onClick={() => handleQuantity("inc")} />
                                </Box>
                                <Button onClick={handleClick} sx={{ backgroundColor: "#F37539", color: "black", marginTop: "20px" }} variant="outlined">ADD to Cart</Button>
                            </Box>
                        </Grid>
                        {/* style={{ position: 'absolute', top:'20px'}} */}
                    </Grid>
                </Box>}
        </Box>
    );
};


export default ProductDetails;