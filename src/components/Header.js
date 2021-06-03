import React from "react";
import {Link} from "react-router-dom"
import { BrowserRouter, Route, withRouter} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Menu from "./Menu";

function Header(props) {
    let name = props.match.params.userName;
    console.log(name);
    return(
        <div>
            
                 <p> Hello {name} !</p>
                 <nav className = "navbar navbar-default">
                        <div className = "container">
                            <div className = "navbar-header">
                                <ul className = "nav navbar-nav">
                                    <li><Link to="/menu">Menu</Link></li>
                                    <li><Link to="/offers">Offers</Link></li>
                                    <li><Link to="/cart">Cart</Link></li>
                                </ul>
                            </div>
                        </div>
                </nav>
                           
        </div>
    );
    
}
export default withRouter(Header);