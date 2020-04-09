import React from 'react'

import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart-actions'

import './style.scss'
import Button from '../Button'

const CollectionItem = ({item, addItem})=>{
  const {name, imageUrl, price}=item

  return(
    <div className="collectionItem">
      <div className="itemImage"
      style={{
        backgroundImage:`url(${imageUrl})`
      }} />
      <div className="itemFooter">
        <span className="itemName">{name}</span>
        <span className="itemPrice">€{price}</span>
      </div>
      <Button onClick={()=>addItem(item)} inverted>ADD TO CART</Button>
    </div>
  )
}

const mapDispatchToProps = dispatch =>({
  addItem: item=> dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)