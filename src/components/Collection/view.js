import React from 'react'

import './style.scss'

const Collection = ({items, title})=>{

  return(
    <div className="collection">
      <h1>{title.toUpperCase()}</h1>
        {items
        .filter((item, idx)=>idx < 4)
        .map((item, id)=><div key={id}>{item.name}</div>)}
    </div>
  )
}

export default Collection