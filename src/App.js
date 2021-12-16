import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './Components/Home';
import About from './Components/About'
import "./App.css";
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Contact from './Components/Contact';
import Error from './Components/404';
import API from './Components/Api'
import Logout from './Components/Logout';
const App=()=>{
  return(
  <>
<Navbar/>
  <Switch>
  
<Route exact path="/" component={Home}/>
<Route exact path="/aboutMe" component={About}/>
<Route exact path="/registeration" component={Signup}/>
<Route exact path="/signin" component={Login}/>
<Route exact path="/contact" component={Contact}/>
<Route exact path="/api" component={API}/>
<Route exact path="/logout" component={Logout}/>
<Route><Error/></Route>
  </Switch>
  
  </>
  );
}
export default App;