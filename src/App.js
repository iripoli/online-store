import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth, createUserProfileDoc } from './firebase/config'
import { setCurrentUser } from './redux/user/user-action'

import HomePage from './containers/Home-Page';
import './App.css';
import Shop from './containers/Shop';
import Navbar from './components/Navbar';
import Identify from './containers/Identify';

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
        <Route exact path="/identify" render={()=>this.props.currentUser 
          ? (<Redirect to='/' />) 
          : (<Identify /> )} />
      </Switch>
    </div>
  );}
}
const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch=>({
  setCurrentUser: user =>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
