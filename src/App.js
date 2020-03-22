import React from 'react';

import { Route, Switch } from 'react-router-dom'
import { auth } from './firebase/firebase'

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>
      this.setState({currentUser: user}))
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
