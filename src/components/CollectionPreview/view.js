import React from 'react'

import './style.scss'
import CollectionItem from '../CollectionItem/view'

const CollectionPreview = ({items, title})=>{

  return(
    <div className="collectionPreview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
        .filter((item, idx)=>idx < 4)
        .map(({id, ...item})=>
        <CollectionItem key={id} {...item} />)}
      </div>
    </div>
  )
}

export default CollectionPreview