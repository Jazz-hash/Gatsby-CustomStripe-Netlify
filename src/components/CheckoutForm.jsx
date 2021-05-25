import { CardCvcElement, CardElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React from 'react'
import "./checkoutForm.css"

const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const checkoutSubmit = async () => {
        const response = await fetch("/.netlify/functions/checkout", {method: "POST"});
        const data = await response.json()
        console.log("data", data);

        const result = await stripe.confirmCardPayment(data.client_secret, {
            payment_method: {
                card: elements.getElement(CardNumberElement),
                billing_details: {
                    name: "Jazzel Mehmood",
                    email: "jazzelmehmood4@gmail.com"
                }
            }
        })
        console.log("result", result);
    }

    return (
        <div>
            CheckoutForm
            <div>

            <CardNumberElement options={CARD_ELEMENT_OPTIONS} />
            <CardExpiryElement options={CARD_ELEMENT_OPTIONS} />
            <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
            </div>
            <button onClick={checkoutSubmit}>
          Checkout
      </button>

        </div>
    )
}

export default CheckoutForm
