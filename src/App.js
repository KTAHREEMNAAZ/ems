import React,{Component} from 'react';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';
import Employees from './components/employees';
 import 'react-toastify/dist/ReactToastify.css'
 import {Switch,Route,Redirect, BrowserRouter} from 'react-router-dom';

function App() {
  return (

    <div className="container">
  <Employees/>
    <BrowserRouter>
   <Switch>
   <Route exact path='/' component={Home}></Route>
   <Route exact path='/login' component={Login}></Route>
   <Route exact path='/signup' component={Signup}></Route>
   <Route exact path='/employees' component={Employees}></Route>
   <Redirect to="/" />
   </Switch>
   </BrowserRouter> 
   
     </div>
  );
}

export default App;
