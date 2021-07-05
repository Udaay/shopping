import React, {Component} from "react";
import "./App.css";
import { Route, Switch} from 'react-router-dom';

import Homepage from './pages/homePage/homepage.component'
import ShopePage from './pages/ShopPage/shopepage.component'
import SignINAndSignUpPage from './pages/signIn-and-signUp-pages/signIn-and-signUp-pages.component'
import Header from './component/header/header.component'
import {auth} from './firebase/firebase.utils'

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      window.currUser = user;
      this.setState({currentUser: user})
      console.log(user, 'User logout/loggedin');
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser} />
      <Switch>
        <Route exact path='/signin' component = { SignINAndSignUpPage } />
        <Route exact path='/' component = { Homepage } />
        <Route exact path='/shop' component = { ShopePage } />
      </Switch>
      </div>
    );
  }
}
