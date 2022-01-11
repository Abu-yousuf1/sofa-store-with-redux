import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, CircularProgress, Grid, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToCart } from '../../../Redux/cartRedux';
import './Product.css'

const Product = ({ product }) => {
    const { isLoading } = useAuth()
    const [quantity, setQuantity] = useState(1)
    const ProductData = useSelector((state) => state.cart.product);
    const dispatch = useDispatch();
    const handleClick = (product) => {
        dispatch(addToCart({ ...product, quantity }));
    };
    const { name, image, price, _id, rating } = product
    return (
        <Grid item xs={12} sm={4} md={4}>
            {/* <Link style={{ textDecoration: 'none' }} to={`/products/${_id}`}> */}

            <Card sx={{ maxWidth: 345 }} className="card childcart">
                <Link style={{ textDecoration: 'none' }} to={`/products/${_id}`}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        className="cardImage"
                        image={image}
                    />
                    <CardContent>
                        <Box
                            sx={{ display: "flex", justifyContent: "space-between" }}
                        >
                            {/* <Typography
                          gutterBottom
                          variant="caption"
                          sx={{ color: "text.secondary" }}
                          component="div"
                        >
                          {item.model}
                        </Typography> */}
                            {/* <Typography
                          gutterBottom
                          variant="caption"
                          sx={{ color: "text.secondary" }}
                          component="div"
                        >
                          Serial: {item.serial}
                        </Typography> */}
                        </Box>
                        <Typography
                            gutterBottom
                            variant="h5"
                            sx={{ fontWeight: "bold" }}
                            component="div"
                        >
                            {name}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="h5"
                            sx={{ color: "text.secondary" }}
                            component="div"
                        >
                            $ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            <Rating
                                name="half-rating"
                                defaultValue={rating}
                                precision={0.5}
                                readOnly
                            />
                        </Typography>
                    </CardContent>
                </Link>
                <CardActions sx={{ justifyContent: "center" }}>
                    <div className="addCard">
                        <Button
                            variant="contained"
                            onClick={() => handleClick(product)}
                        >
                            {" "}
                            <AddShoppingCartIcon sx={{ marginRight: "15px" }} />
                            ADD TO CART
                        </Button>
                    </div>
                </CardActions>
            </Card>
        </Grid >
    );
};

export default Product;