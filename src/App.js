import React from 'react';

import { Route, Switch } from 'react-router-dom'

import HomePage from './containers/home-page';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component='' />

      </Switch>
    </div>
  );
}

export default App;
