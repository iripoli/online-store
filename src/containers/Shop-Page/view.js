import React from 'react'

import SHOP_DATA from '../../static/shop.data'
import './style.scss'
import Collection from '../../components/CollectionPreview'


class Shop extends React.Component{
  constructor(props){
    super(props)
    
    this.state={
      collections: SHOP_DATA
    }
  }

  render(){

    const {collections} = this.state

    return(
      <div className="shop">
        {collections
        .map(({id, ...otherCollection})=>{
         return(<Collection key={id} {...otherCollection} />) 
        })}
      </div>
    )
  }
}

export default Shop