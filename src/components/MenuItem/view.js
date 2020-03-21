import React from 'react'

import {withRouter} from 'react-router-dom'

import './style.scss'

const MenuItem = ({title, size, imageUrl, history, linkUrl, match})=>{
  return (
    <div className={`${size} menu-item`} onClick={()=>history.push(`/${linkUrl}`)}>
    <div className="bgImage" style={{backgroundImage: `url(${imageUrl})`}} />
      <div className="content">
        <h2 className="title">{title.toUpperCase()}</h2>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>

  )
}

export default withRouter(MenuItem)