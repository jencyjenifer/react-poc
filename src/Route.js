import React from "react"
import {Route, makeRouteConfig} from "found"
import Home from "./components/Home";
import Header from "./components/Header";
import Cart from "./components/Cart";
import App from './App';

const CustomRoute = makeRouteConfig(
    <Route>
        <Route exact path="/" component={App} /> 
         <Route path = {"/home"} component = {Home}/>
      <Route path = {"/header/:userName"} component = {Header}/>
       <Route path = {"/cart"} component = {Cart}/>
    </Route>
    );

    export default CustomRoute;
