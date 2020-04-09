import React from 'react' 
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollectionsForPreview } from '../../redux/shop/shop-selector'

import CollectionPreview from '../CollectionPreview'
import './style.scss'

const Collections = ({collections})=>{
  return(
    <div className="collections">
       {collections
        .map(({id, ...otherCollection})=>{
         return(<CollectionPreview key={id} {...otherCollection} />) 
        })}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})


export default connect(mapStateToProps)(Collections)