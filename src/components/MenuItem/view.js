import React from 'react'

import './style.scss'

const MenuItem = ({title, id, size, imageUrl, linkUrl})=>{
  return (
    <div className={`${size} menu-item`}>
    <div className="bgImage" style={{backgroundImage: `url(${imageUrl})`}} />
      <div className="content">
        <h2 className="title">{title.toUpperCase()}</h2>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>

  )
}

export default MenuItem