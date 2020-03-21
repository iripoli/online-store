import React from 'react'

import './style.scss'

const CollectionItem = ({name, imageUrl, price})=>{
  return(
    <div className="collectionItem">
      <div className="itemImage"
      style={{
        backgroundImage:`url(${imageUrl})`
      }} />
      <div className="itemFooter">
        <span className="itemName">{name}</span>
        <span className="itemPrice">{price}</span>


      </div>
    </div>
  )
}

export default CollectionItem