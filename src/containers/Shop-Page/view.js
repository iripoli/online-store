import React from 'react'
import { Route } from 'react-router-dom'

import './style.scss'
import Collections from '../../components/Collections'
import Category from '../Category-Page'


const Shop = ({ match })=>{
    return(
      <div className="shop">
        <Route exact path={`${match.path}`} component={Collections} />
        <Route path={`${match.path}/:collectionId`} component={Category} />
      </div>
    )
  }

export default Shop