import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hook/useAuth';
import Footer from '../shared/Footer/Footer';
import Navigation from '../shared/Navigation/Navigation';
import './checkout.css'
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../Redux/cartRedux'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Checkout = () => {
    const { user } = useAuth();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector((state) => state.cart)

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.email = user.email
        data.name = user.displayName
        data.totalPrice = cart.total;
        data.cart = cart.cart
        console.log(data, "kld");

        fetch('https://still-journey-43964.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                reset(data)
                dispatch(clearCart([]))
                swal("Good job!", "Congratulations you are successfully Purchased!", "success")
                setTimeout(function () {
                    navigate('/')
                }, 1000)

            })

    }
    return (
        <Box>
            <Navigation />
            <Box sx={{ mt: 15, }} >
                <Grid>
                    <Box sx={{}}>
                        <Typography variant="h4" sx={{ textAlign: 'center' }}>Checkout Form</Typography>
                        <Grid
                            container
                            spacing={3}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: {
                                    xs: "column",
                                    sm: "column",
                                    md: "row",
                                    lg: "row",
                                    xl: "row",
                                },
                                my: 5,
                            }}
                        >
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <Container>
                                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                        <h4>Contact information</h4>
                                        <input
                                            defaultValue={user.email}
                                            disabled
                                            type="email"
                                            {...register("email")}
                                            placeholder="Enter Your Email"
                                        />
                                        {errors.email && (
                                            <span className="error">This field is required</span>
                                        )}
                                        <h4>Shipping Address</h4>
                                        <label>Name</label>
                                        <input
                                            defaultValue={user.displayName}
                                            disabled
                                            {...register("name")}
                                            placeholder="Enter Your Name"
                                        />
                                        {errors.name && (
                                            <span className="error">This field is required</span>
                                        )}{" "}
                                        <br />
                                        <label> Address</label>
                                        <textarea
                                            {...register("address", { required: true })}
                                            placeholder="Enter Your Address"
                                        />
                                        {errors.address && (
                                            <span className="error">This field is required</span>
                                        )}
                                        <br />
                                        <label>Appartment</label>
                                        <input
                                            {...register("appartment", { required: true })}
                                            placeholder="Appartment  "
                                        />
                                        {errors.appartment && (
                                            <span className="error">This field is required</span>
                                        )}
                                        <br />
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Box>
                                                <label>City</label>
                                                <input
                                                    style={{ width: "90%" }}
                                                    type="text"
                                                    {...register("city", { required: true })}
                                                    placeholder="city"
                                                />{" "}
                                                <br />
                                                {errors.city && (
                                                    <span className="error">This field is required</span>
                                                )}
                                            </Box>
                                            <Box>
                                                <label> Zip Code</label>
                                                <input
                                                    style={{ width: "90%" }}
                                                    type="number"
                                                    {...register("zip", { required: true })}
                                                    placeholder="ZIP Code"
                                                />{" "}
                                                <br />
                                                {errors.zip && (
                                                    <span className="error">This field is required</span>
                                                )}
                                            </Box>
                                        </Box>
                                        <label>Phone Number</label>
                                        <input
                                            type="number"
                                            {...register("phone", { required: true })}
                                            placeholder="Enter Phone Number"
                                        />
                                        {errors.phone && (
                                            <span className="error">This field is required</span>
                                        )}{" "}
                                        <br />
                                        <Button variant="contained" className="button primary-bg-color" type="submit">
                                            Continue to shipping
                                        </Button>
                                    </form>
                                </Container>
                            </Grid>
                        </Grid>
                    </Box>
                    {/* <Container
                        sx={{

                            my: 5,
                            width: { xs: "100%", sm: "80%", md: "50%", lg: "30%" },
                        }}
                    >
                        <Box>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm total={total} />
                            </Elements>
                        </Box>
                    </Container> */}
                </Grid>

            </Box>
            <Footer />
        </Box>
    );
};

export default Checkout;