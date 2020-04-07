import React from 'react'

import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart-selectors'


import Button from '../Button'

import './style.scss'
import CartItem from '../CartItem'

const CartDropDown = ({cartItems})=>{
  return(
    <div className="cart-dropdown">
      <div className="cart-items">
        { cartItems.map(cartItem =>(<CartItem key={cartItem.id} item={cartItem} />))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

const mapStateToProps = (state) =>({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown)