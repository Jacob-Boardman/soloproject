import React, { Component } from 'react';
import AllUsers from './AllUsers';
//import './Homepage.css';

class Homepage extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <h1>Game Matcher</h1>
                </div>
                <div className="getAllUsers">
                    <button className="getUserButton">See all users</button>
                    <AllUsers/>
                </div>
                <div className="getAllGames">
                <button className="getGameButton">See all Games</button>
                </div>
            </div>

        );
    }
}

export default Homepage;