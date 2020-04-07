import CartActionTypes from './cart-types'

export const toggleCartHidden = ()=>({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item =>({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

export const clearItemCart = item=>({
  type: CartActionTypes.CLEAR_ITEM_CART,
  payload: item
})