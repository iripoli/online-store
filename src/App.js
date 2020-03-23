import React from 'react';

import { Route, Switch } from 'react-router-dom'
import { auth, createUserProfileDoc } from './firebase/config'

import HomePage from './containers/Home-Page';
import './App.css';
import Shop from './containers/Shop';
import Navbar from './components/Navbar';
import Identify from './containers/Identify';

class App extends React.Component {
  
  constructor(){
    super()

    this.state={
      currentUser: null
    }
  }

unsubscribeFromAuth=null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if (userAuth){
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
    else this.setState({currentUser: userAuth})})

    }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
  return (
    <div>
    <Navbar currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/identify" component={Identify} />
      </Switch>
    </div>
  );}
}

export default App;
