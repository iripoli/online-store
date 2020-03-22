import React from 'react';

import { Route, Switch } from 'react-router-dom'

import HomePage from './containers/Home-Page';
import './App.css';
import Shop from './containers/Shop';
import Navbar from './components/Navbar';
import Identify from './containers/Identify';

function App() {
  return (
    <div>
    <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/identify" component={Identify} />
      </Switch>
    </div>
  );
}

export default App;
