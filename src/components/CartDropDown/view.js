import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {withRouter} from 'react-router-dom'


import { selectCartItems } from '../../redux/cart/cart-selectors'
import {toggleCartHidden} from '../../redux/cart/cart-actions'


import Button from '../Button'

import './style.scss'
import CartItem from '../CartItem'

const CartDropDown = ({cartItems, history, dispatch})=>{
  return(
    <div className="cart-dropdown">
      <div className="cart-items">
        { 
          cartItems.length 
          ? cartItems.map(cartItem =>(<CartItem key={cartItem.id} item={cartItem} />))
          : <span className="empty-message">Your cart is empty</span> 
          
          }
      </div>
      <Button onClick={()=>{
        history.push('/checkout')
        dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</Button>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown))