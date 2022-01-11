import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Typography } from '@mui/material';
import Navigation from './../shared/Navigation/Navigation';
import Footer from '../shared/Footer/Footer';

const stripePromise = loadStripe('pk_test_51JvxXGAQHZ9U1ACZ03EBduq3l5NrlNu3MldkS0BnffUnT4aSwOxIG5JH4REDgpkdizHHUSr3zIXhgLYo3rFdcldh00ZRE5yvkQ');

const Payment = () => {


    return (
        <div>
            <Navigation />
            <Typography sx={{ textAlign: 'center' }} variant="h4">Please pay </Typography>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
            <Footer />
        </div>
    );
};
export default Payment;