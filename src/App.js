import React from "react";
import "./App.css";
import { Route, Switch} from 'react-router-dom';
import Homepage from './pages/homepage.component'

const HatsPage = ()=> {
  return(
    <div>
      <h1> HatsPage  </h1>
    </div>
  )
}
const Jackets = ()=> {
  return(
    <div>
      <h1> Jackets Page  </h1>
    </div>
  )
}
const Sneaker = ()=> {
  return(
    <div>
      <h1> Sneaker  Page</h1>
    </div>
  )
}
const Womans = ()=> {
  return(
    <div>
      <h1> Womans Page </h1>
    </div>
  )
}
const Mens = ()=> {
  return(
    <div>
      <h1>mens Page</h1>
    </div>
  )
}

function App() {
  return (
    <div>
    <Switch>
      <Route exact = {true} path='/' component = { Homepage } />
      <Route exact = {true} path='/hats' component = { HatsPage } />
      <Route exact = {true} path='/jackets' component = { Jackets } />
      <Route exact = {true} path='/sneakers' component = { Sneaker } />
      <Route exact = {true} path='/womans' component = { Womans } />
      <Route exact = {true} path='/mens' component = { Mens } />
    </Switch>
    </div>
  );
}

export default App;
