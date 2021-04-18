import React from "react";
import "./App.css";
import { Route, Switch} from 'react-router-dom';

import Homepage from './pages/homePage/homepage.component'
import ShopePage from './pages/ShopPage/shopepage.component'

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component = { Homepage } />
      <Route exact path='/shop' component = { ShopePage } />
    </Switch>
    </div>
  );
}

export default App;
