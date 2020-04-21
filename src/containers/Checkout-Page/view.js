import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { clearCart } from '../../redux/cart/cart-actions'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors'

import './style.scss'
import CheckoutItem from '../../components/CheckoutItem/view'
import StripeCheckoutButton from '../../components/StripeCheckoutButton'

const Checkout = ({cartItems, total, clearCart})=>{
  return(
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.length !== 0 ?
        cartItems.map(cartItem=><CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        : <div className="no-items-message">ADD ITEMS TO CART</div>
      }

      <div className="total">
        <span>TOTAL: €{total}</span>
      </div>
      <StripeCheckoutButton price={total} cartItems={cartItems}  />
      <div className="test-warning">*Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/21 - CVC: 123
      </div>
      <div onClick={()=>clearCart(cartItems)}>Borrar items</div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})

const mapDispatchToProps = dispatch=>({
   clearCart: item=>dispatch(clearCart(item))
  })

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)