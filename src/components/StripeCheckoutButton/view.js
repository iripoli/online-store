import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

import './style.scss'
import { clearCart } from '../../redux/cart/cart-actions'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'


const StripeCheckoutButton = ({ price, cartItems, clearCart }) => {
  const priceForStripe = price * 100
  const publicKey = 'pk_test_3nKidwn5ey5dlvET6UgziQ2S'
  const history = useHistory()
  


  const onToken = (token) => {
    console.log(token)
    clearCart(cartItems)
    history.push('/ordercompleted')
    

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

const mapDispatchToProps = dispatch=>({
  clearCart: item=>dispatch(clearCart(item))
 })

export default connect(null, mapDispatchToProps)(StripeCheckoutButton)