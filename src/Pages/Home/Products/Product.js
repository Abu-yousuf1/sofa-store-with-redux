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

const Product = ({ product }) => {
    const { isLoading } = useAuth()
    const { name, image, price, _id, rating } = product
    return (
        <Grid item xs={12} sm={4} md={4}>
            {isLoading ? <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
                : <Link style={{ textDecoration: 'none' }} to={`/products/${_id}`}>
                    <Card sx={{ maxWidth: 345, justifyContent: 'center' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="100%"
                            image={image}
                        />
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant="h6" component="div">
                                {name}
                            </Typography>
                            <Typography variant="body3" color="text.secondary">
                                Price: ${price}
                            </Typography>

                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Rating name="read-only" value={rating} readOnly />
                        </CardActions>

                        {/* <Button sx={{ backgroundColor: "#F37539", color: "black", marginTop: "20px" }} variant="outlined">ADD to Cart</Button> */}
                    </Card>
                </Link>}
        </Grid >
    );
};

export default Product;