import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Box, Button, CircularProgress, Container, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import useAuth from '../../hook/useAuth';
import { useDispatch } from 'react-redux';
import { clearCart, clearOrder } from '../../Redux/cartRedux';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';


const CheckoutForm = ({ order }) => {
    const { totalPrice, name } = order;
    const stripe = useStripe();
    const elements = useElements()
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useAuth()
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price: totalPrice })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        setProcessing(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setError(error.message)
            setSuccess('')
        }
        else {
            setError('');
            console.log(paymentMethod)
        }
        // payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: user.email
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message);
            setSuccess('');
        } else {
            setError('')
            setSuccess('Your payment processed successfully.')
            console.log(paymentIntent)
            setProcessing(false)
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }
            const orders = { ...order, payment }
            fetch('https://still-journey-43964.herokuapp.com/order', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orders)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    dispatch(clearCart([]))
                    dispatch(clearOrder([]))
                    swal("Good job!", "Congratulations you are successfully Purchased!", "success")
                    setTimeout(function () {
                        navigate('/Dashboard')
                    }, 1000)

                })
        }

    }
    return (
        <div>

            <Container sx={{}}>

                {/* <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        /> */}
                <Box

                >
                    <form onSubmit={handleSubmit} style={{ justifyContent: 'center' }}>
                        <CardElement
                            variant="standard"
                            options={{
                                style: {
                                    base: {

                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            {processing ? <CircularProgress />
                                : <Button variant="contained" type="submit" sx={{ marginTop: '25px' }} disabled={!stripe}>
                                    Pay
                                </Button>}
                        </Box>
                    </form>
                    {
                        error && <p style={{ color: 'red' }}>{error}</p>
                    }
                    {
                        success && <p style={{ color: 'green' }}>{success}</p>
                    }
                </Box>
            </Container>
        </div>
    );
};

export default CheckoutForm;