import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./components/Home";
import Header from "./components/Header";
import Cart from "./components/Cart";
import {Link} from "react-router-dom"
import { BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import { createBrowserHistory } from 'history';
import { createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducer/rootReducer'
import AppLatest from './AppLatest';
import Menu from "./components/Menu";

const route = (
  <BrowserRouter history = {createBrowserHistory()}>
    <Switch>
      <Route exact path="/" component={App} /> 
      <Route path = {"/home"} component = {Home}/>
      <Route path = {"/header/:userName"} component = {Header}/>
      <Route path = {"/cart"} component = {Cart}/>
      <Route path = {"/menu"} component = {Menu}/>
     </Switch>
  </BrowserRouter >
)

export default route


 //const appStore = createStore(rootReducer);
// console.log(store.getState())
// store.subscribe(()=> console.log(store.getState()));

// store.dispatch({type:"Inc",payload:100})
// store.dispatch({type:"Dec",payload:50})
ReactDOM.render(

  <Provider store={createStore(rootReducer)}>
   {route}
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
