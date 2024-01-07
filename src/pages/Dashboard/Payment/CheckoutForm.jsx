import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useAuth } from '../../../hooks/useAuth';
import { toast } from 'react-hot-toast';
const CheckoutForm = ({ cart, totalPrice }) => {

  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  // console.log(user?.displayName);
  const [errorMessage, setErrorMessage] = useState('');
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { totalPrice })
      .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      })
  }, [totalPrice, axiosSecure])

  const handleSubmit = async (event) => {
    // Prevent default form submission behaviour
    event.preventDefault();

    // If stripe and elements object are not available, exit this function
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    console.log('card', card);

    if (card == null) {
      return;
    }


    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    if (error) {
      console.log('error', error);
      setErrorMessage(error.message);

    }
    else {
      console.log('Payment Method', paymentMethod);
    }

    setProcessing(true);
    const { confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'unknown',
          name: user?.displayName || 'anonymous'
        },
      },
    })

    if (confirmError) {
      console.log(confirmError);
      setErrorMessage(confirmError)
    }
    console.log('Payment Intent', paymentIntent)
    setProcessing(false);

    if (paymentIntent.status === 'succeeded') {
      const transactionId = paymentIntent.id;
      setTransactionId(transactionId);

      // Save payment information to the server
      const payment = {
        email: user?.email, 
        transactionId: paymentIntent.id, 
        totalPrice, 
        quantity: cart.length,
        itemName: cart.map(item => item.nameOfClass),
        itemImg: cart.map(item => item.photo)
      }

      axiosSecure.post('/payment', payment)
      .then(res => {
        console.log(res.data)
        if(res.data.insertedId){
          // Display confirm
          console.log('Payment Confirmed')
          toast.success('Payment Confirmed!')
          
        }
      }
      )
    }

  }
  return (
    <form onSubmit={handleSubmit} className='border px-8 py-10 shadow'>
      {
        errorMessage ? <small className='text-red-600'>{errorMessage}</small> :
          <small className='text-center text-gray-500 mb-5'> Please put in your card information to make payment</small>}
      <CardElement
        className='border px-2 py-4 rounded'
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
      <button type="submit" disabled={!stripe || !clientSecret || processing} className='btn w-full bg-teal-800 text-white'>
        Pay with Card
      </button>
      {errorMessage && <p className='text-red-600 text-sm'>{errorMessage}</p>}
      {transactionId && <p className='text-green-600 text-sm'>Payment Succeeded with Transaction ID: {transactionId}</p>}
    </form>
  );
};

export default CheckoutForm;