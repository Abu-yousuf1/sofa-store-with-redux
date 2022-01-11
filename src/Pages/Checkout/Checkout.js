import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hook/useAuth';
import Footer from '../shared/Footer/Footer';
import Navigation from '../shared/Navigation/Navigation';
import './checkout.css'
import { useSelector, useDispatch } from 'react-redux';
import { addToOrder, clearCart } from '../../Redux/cartRedux'
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { styled } from '@mui/system';
import CheckoutForm from '../Payment/CheckoutForm';

const Checkout = () => {
    const { user } = useAuth();
    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    const stripePromise = loadStripe('pk_test_51JvxXGAQHZ9U1ACZ03EBduq3l5NrlNu3MldkS0BnffUnT4aSwOxIG5JH4REDgpkdizHHUSr3zIXhgLYo3rFdcldh00ZRE5yvkQ');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const order = useSelector((state) => state.cart.order)
    const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
    const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;
    const style = {
        width: 500,
        bgcolor: 'background.paper',

        p: 2,
        px: 4,
        pb: 3,
    };

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.email = user.email
        data.name = user.displayName
        data.totalPrice = cart.total;
        data.cart = cart.cart
        console.log(data, "kld");
        dispatch(addToOrder(data))
        handleOpen()
        reset(data)
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
                                        {/* <Link to="/payment" style={{ textDecoration: "none" }}> */}
                                        <Button variant="contained" type="submit" className="button primary-bg-color">
                                            Continue to shipping
                                        </Button>
                                        {/* // <Button variant="contained" className="button primary-bg-color" type="submit">
                                    //     Continue to shipping
                                    // </Button> */}
                                        {/* </Link> */}
                                    </form>
                                </Container>
                            </Grid>
                        </Grid>

                        <StyledModal
                            aria-labelledby="unstyled-modal-title"
                            aria-describedby="unstyled-modal-description"
                            open={open}
                            onClose={handleClose}
                            BackdropComponent={Backdrop}
                        >
                            <Box sx={style}>
                                <Typography sx={{ textAlign: 'center', marginBottom: '25px' }} variant="h4">Please pay </Typography>

                                {order.totalPrice && <Elements stripe={stripePromise}>
                                    <CheckoutForm order={order} />
                                </Elements>}
                            </Box>
                        </StyledModal>
                    </Box>

                </Grid>

            </Box>
            <Footer />
        </Box>
    );
};

export default Checkout;