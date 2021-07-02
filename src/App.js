import React from "react";
import "./App.css";
import { Route, Switch} from 'react-router-dom';

import Homepage from './pages/homePage/homepage.component'
import ShopePage from './pages/ShopPage/shopepage.component'
import SignINAndSignUpPage from './pages/signIn-and-signUp-pages/signIn-and-signUp-pages.component'
import Header from './component/header/header.component'

function App() {
  return (
    <div>
      <Header/>
    <Switch>
      <Route exact path='/signin' component = { SignINAndSignUpPage } />
      <Route exact path='/' component = { Homepage } />
      <Route exact path='/shop' component = { ShopePage } />
    </Switch>
    </div>
  );
}

export default App;
