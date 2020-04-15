import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

import './style.scss'


const StripeCheckoutButton = ({ price, cartItems }) => {
  const priceForStripe = price * 100
  const publicKey = 'pk_test_3nKidwn5ey5dlvET6UgziQ2S'
  
  const onToken = token => {
    console.log(token)
    alert('Payment Succesful')
  }



  return (
    <div className="pay-button">
    {
    cartItems.length !== 0 
    ?
    <StripeCheckout 
    label= 'Pay now'
    name= 'React-Store!'
    billingAddress
    shippingAddress
    currency='EUR'
    image="https://reactjs.org/logo-og.png"
    description={`Your total is €${price}`}
    amount={priceForStripe}
    panelLabel='Pay now'
    token={onToken}
    stripeKey={publicKey}
     />
     :
     <StripeCheckout 
    label= 'Pay now'
    disabled={true}
     />
    }
    </div>
  )
}

export default StripeCheckoutButton