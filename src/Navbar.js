import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
//import './Navbar.css';
import Homepage from './Homepage.js';
import Users from './Users.js';
import Games from './Games.js';

class Navbar extends Component {
    render() {
        return (
            <Router>
            <div className="navBar">
                <div>
                    <ul>
                        <li className="navItem"><h3><NavLink exact={true} activeClassName='is-active' to="/">Home</NavLink></h3></li>
                        <li className="navItem"><h3><NavLink activeClassName='is-active'  to="/users">Users</NavLink></h3></li>
                        <li className="navItem"><h3><NavLink activeClassName='is-active'  to="/games">Games</NavLink></h3></li>
                    </ul>

                <Route exact path="/" component={Homepage}/>
                <Route path="/users" component={Users} />
                <Route path="/games" component={Games} />

                </div>
            </div>
            </Router>
        );
    }
}

export default Navbar;
