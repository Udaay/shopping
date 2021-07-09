import React, {Component} from "react";
import { Route, Switch, Redirect} from 'react-router-dom';
import { connect } from "react-redux";
import "./App.css";

import Homepage from './pages/homePage/homepage.component'
import ShopePage from './pages/ShopPage/shopepage.component'
import SignINAndSignUpPage from './pages/signIn-and-signUp-pages/signIn-and-signUp-pages.component'
import Header from './component/header/header.component'
import {auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions'

class App extends Component {
  unSubscribeFromAuth = null;

  componentDidMount(){
    console.log(this.props, 'property');
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot=>{
          const {id} = snapshot;
          setCurrentUser({
              id,
              ...snapshot.data(),
          })
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
      <Switch>
        <Route exact path='/signin' render = {() =>  (this.props.currentUser) ? <Redirect to='/' /> : <SignINAndSignUpPage/> } />
        <Route exact path='/' component = { Homepage } />
        <Route exact path='/shop' component = { ShopePage } />
      </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user})=>({
  currentUser: user.currentUser
})

const mapDispatchtoProps = dispatch =>({
setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchtoProps)(App);
