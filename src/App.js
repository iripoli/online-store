import React from 'react';

import { Route, Switch } from 'react-router-dom'

import HomePage from './containers/Home-Page';
import './App.css';
import Shop from './containers/Shop';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />


      </Switch>
    </div>
  );
}

export default App;
