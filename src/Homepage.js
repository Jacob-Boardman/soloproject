import React, { Component } from 'react';
import User from './User';
import Game from './Game';
import axios from 'axios';

class Homepage extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            games: []
        }
    }

    getUsers = () => {
        axios.get('http://localhost:8081/solo-project-games-api/api/user/getAllUsers').then(response => {
                this.setState({ users: response.data });
                console.log(this.state.users);
            })
        }
        
        render() {
            let userList = [];
            for (let i of this.state.users) {
                userList.push(<User user={i} />)
            }
            
        return (
            <div>
                <div className="header">
                    <h1>Game Matcher</h1>
                </div>
                <div className="getAllUsers">
                    <button className="getUserButton" onClick={this.getUsers}>See all Users</button>
                    {userList}
                </div>
                <div className="getAllGames">
                    <button className="getGameButton">See all Games</button>
                    <Game />
                </div>
            </div>

        );
    }
}

export default Homepage;