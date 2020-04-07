import React from 'react'
import { connect } from 'react-redux'
import { clearItemCart } from '../../redux/cart/cart-actions'

import './style.scss'

const CheckoutItem = ({cartItem, clearItemCart})=>{
  const {name, imageUrl, price, quantity} = cartItem
  return(
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">€{price}</span>
    <div className="remove-button" onClick={()=>clearItemCart(cartItem)}>&#10005;</div>
  </div>
  )
}

const mapDispatchToProps = dispatch =>({
  clearItemCart: item => dispatch(clearItemCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
