import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth, createUserProfileDoc } from './firebase/firebase-utils'
import { setCurrentUser } from './redux/user/user-action'
import {selectCurrentUser} from './redux/user/user-selectors' 
import { selectCollectionsForPreview } from './redux/shop/shop-selector'

import HomePage from './containers/home-page/view'
import Shop from './containers/Shop-Page'
import Navbar from './containers/Navbar'
import Identify from './containers/Identify-Page'
import Checkout from './containers/Checkout-Page'
import './App.css';
import OrderCompleted from './containers/OrderCompleted-Page/view';


class App extends React.Component {

unsubscribeFromAuth=null

  componentDidMount(){
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if (userAuth){
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapShot =>{
           setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          })
       
      }

    setCurrentUser(userAuth)
      })
    }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
  return (
    <div>
    <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/identify" render={()=>this.props.currentUser 
          ? (<Redirect to='/' />) 
          : (<Identify /> )} />
        <Route exact path="/ordercompleted" component={OrderCompleted} />
      </Switch>
    </div>
  );}
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview 
})

const mapDispatchToProps = dispatch=>({
  setCurrentUser: user =>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
