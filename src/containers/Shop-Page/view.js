import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './style.scss'
import Collections from '../../components/Collections'
import Category from '../Category-Page'
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase-utils'
import { updateCollections } from '../../redux/shop/shop-actions'
import { connect } from 'react-redux'
import Loading from '../../components/Loading'


const CollectionsLoading = Loading(Collections)
const CategoryLoading = Loading(Category)

class Shop extends Component{
  state = {
    loading: true
  }
  unsubscribeFromSnapshot= null

  componentDidMount(){
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')
    fetch('https://firestore.googleapis.com/v1/projects/store-db-56732/databases/(default)/documents/collections')
    .then(response => response.json())
    .then(collections => console.log(collections))
  //   collectionRef.get().then(snapshot =>{
  //    const collectionMap = convertCollectionSnapshotToMap(snapshot)
  //    updateCollections(collectionMap)
  //    this.setState({loading: false})
  //   })
}

  render(){
    const { match } = this.props
    const { loading } = this.state
    return(
      <div className="shop">
        <Route exact path={`${match.path}`} render={(props)=><CollectionsLoading isLoading={loading} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props)=><CategoryLoading isLoading={loading} {...props} />} />
      </div>
    )
  }
  }

const mapDispatchToProps = dispatch =>({
  updateCollections: collectionMap =>
  dispatch(updateCollections(collectionMap))
}
)
export default connect(null, mapDispatchToProps)(Shop)