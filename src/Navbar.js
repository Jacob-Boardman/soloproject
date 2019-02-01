import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Homepage from './Homepage.js';
import UsersDOM from './User/UsersDOM.js';
import GamesDOM from './Game/GamesDOM.js';
import MatcherDOM from './MatcherDOM.js';
import './Stylesheets/Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <Router>
                <div className="navBar">
                    <ul>
                        <li className="navItem"><h3><NavLink exact={true} activeClassName='is-active' to="/">Home</NavLink></h3></li>
                        <li className="navItem"><h3><NavLink activeClassName='is-active' to="/users">Users</NavLink></h3></li>
                        <li className="navItem"><h3><NavLink activeClassName='is-active' to="/games">Games</NavLink></h3></li>
                        <li className="navItem"><h3><NavLink activeClassName='is-active' to="/matcher">Matcher</NavLink></h3></li>
                    </ul>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/users" component={UsersDOM} />
                    <Route path="/games" component={GamesDOM} />
                    <Route path="/matcher" component={MatcherDOM} />
                </div>
            </Router>
        );
    }
}

export default Navbar;
