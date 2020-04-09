import React from 'react'
import { connect } from 'react-redux'

import { selectCollection } from '../../redux/shop/shop-selector'

import CollectionItem from '../../components/CollectionItem'

import './style.scss'

const Category = ({collection})=>{
  const {title, items} = collection
  return(
    <div className="category">
      <h2 className="title">{title}</h2>
      <div className="items">
        {
          items.map(item=>(<CollectionItem className="collection-item" key={item.id} item={item} />))
        }
      </div>

    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Category)