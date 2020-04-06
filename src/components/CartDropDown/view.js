import React from 'react'

import Button from '../Button'

import './style.scss'

const CartDropDown = ()=>{
  return(
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropDown