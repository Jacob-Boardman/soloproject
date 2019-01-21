import React, { Component } from 'react';
import './Homepage.css';

class Homepage extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <h1>Game Matcher </h1>
                </div>
                <div className="userLogin">
                    <form action="onSubmit">
                        <input type="text" placeholder="Account Name..." />
                        <input type="password" placeholder="Password..." />
                        <input type="submit" value="Sumbit" />
                    </form>
                </div>
            </div>

        );
    }
}

export default Homepage;