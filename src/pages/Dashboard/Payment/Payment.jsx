import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../hooks/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
    const [cart] = useCart();
    console.log(cart);
    const totalPrice = cart.reduce((runningTotal, item)=>runningTotal + parseFloat(item.price) , 0 );
    console.log(totalPrice);
    return (
        <div>
            <SectionTitle subHeading='Made easy with Stripe' heading='Payment'/>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} totalPrice ={totalPrice}></CheckoutForm>
            </Elements>
           
        </div>
    );
};

export default Payment;