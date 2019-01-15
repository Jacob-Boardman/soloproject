import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="navBar">
                <div>
                    <ul>
                        <li><h3>Home</h3></li>
                        <li><h3>Users</h3></li>
                        <li><h3>Games</h3></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;
