import React, { Component } from 'react';
import User from './User/User.js';
import Game from './Game/Game.js';
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
        axios.get('http://35.242.187.147:8081/solo-project-games-api/api/user/getAllUsers').then(response => {
            this.setState({ users: response.data });
        })
    }

    getGames = () => {
        axios.get('http://35.242.187.147:8081/solo-project-games-api/api/game/getAllGames').then(response => {
            this.setState({ games: response.data });
        })
    }

    render() {
        let userList = [];
        for (let i of this.state.users) {
            userList.push(<User user={i}/>)
        }

        let gameList = [];
        for(let i of this.state.games){
            gameList.push(<Game game={i}/>)
        }

        return (
            <div>
                <div className="header">
                    <h1>Game Matcher</h1>
                </div>
                <button className="getGameButton" onClick={this.getGames}>See all Games</button>
                        <button className="getUserButton" onClick={this.getUsers}>See all Users</button>
                        <br/><br/><br/><br/>
                <div className="homeGrid">
                    <div className="item">
                        {userList}
                    </div>
                    <div className="item">
                        {gameList}
                    </div>
                </div >
            </div >

        );
    }
}

export default Homepage;