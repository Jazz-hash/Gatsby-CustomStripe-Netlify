import * as React from "react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import CheckoutForm from "../components/CheckoutForm"

const stripePromise = loadStripe("pk_test_oCAxK0CcUTHFsfOEu531pLYK00rYFcE5uu")

const IndexPage = () => {
  return (
    <div>
      Hello World !
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  )
}

export default IndexPage
