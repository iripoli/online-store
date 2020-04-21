import React from 'react'
import { connect } from 'react-redux'
import { clearItemCart, addItem, removeItem, clearCart } from '../../redux/cart/cart-actions'

import './style.scss'

const CheckoutItem = ({cartItem, clearItemCart, addItem, removeItem, clearCart})=>{
  const {name, imageUrl, price, quantity} = cartItem
  return(
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
      <div className="arrow" onClick={()=>removeItem(cartItem)}>&#10094;</div>
      <span className="value">{quantity}</span>
      <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
    </span>
    <span className="price">€{price}</span>
    <div className="remove-button" onClick={()=>clearItemCart(cartItem)}>&#10005;</div>
    <div onClick={()=>clearCart(cartItem)}> clear all elements</div>
  </div>
  )
}

const mapDispatchToProps = dispatch =>({
  clearItemCart: item => dispatch(clearItemCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  clearCart: item => dispatch(clearCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
