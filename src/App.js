import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth, createUserProfileDoc } from './firebase/config'
import { setCurrentUser } from './redux/user/user-action'
import {selectCurrentUser} from './redux/user/user-selectors' 

import HomePage from './containers/Home-Page/index'
import Shop from './containers/Shop-Page'
import Navbar from './containers/Navbar'
import Identify from './containers/Identify-Page'
import Checkout from './containers/Checkout-Page'
import './App.css';


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
        <Route exact path="/online-store" component={HomePage} />
        <Route  path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/identify" render={()=>this.props.currentUser 
          ? (<Redirect to='/online-store' />) 
          : (<Identify /> )} />
      </Switch>
    </div>
  );}
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch=>({
  setCurrentUser: user =>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
