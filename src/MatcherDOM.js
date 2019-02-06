import React, { Component } from 'react';
import axios from 'axios';
import Game from './Game/Game.js';
import User from './User/User.js';
import './Stylesheets/Matcher.css';

class MatcherDOM extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            user : [],
            games : []
        }
    }


    handleChange = (event) => {
        this.setState({ id: event.target.value })
    }

    getUserById = () => {
        axios.get('http://localhost:8081/solo-project-games-api/api/user/getUserById/'+ this.state.id).then(response => {
            this.setState({ user: response.data })
            this.getGames();
        })
    }

    getGames = () => {
        axios.get('http://localhost:8081/solo-project-games-api/api/game/getGameByGenre/'+ this.state.user.gameGenre).then(response => {
            this.setState({games: response.data});
        })
    }

    //this.getUserById

    render() {
        let gamesList = [];
        for(let i of this.state.games){
            gamesList.push(<Game game={i}/>);
        }

        return (
            <div className="gameMatcher">
                <div className="header">
                    <h1>Matcher</h1>
                </div>
                <div className="matcherDOM">
                    <div className="findUser">
                        <form className="userForm" onSubmit={(e)=> e.preventDefault()}>
                            <h1 className="formTitle">Find A User</h1>
                            <label htmlFor="id">ID</label><input className="id" type="number" placeholder="ID of account to Find" onChange={this.handleChange} required />
                            <button className="userSubmit" onClick={this.getUserById}>Match Games</button>
                        </form>
                        <User user={this.state.user} />
                    </div>
                    <div>
                        {gamesList}
                    </div>
                </div>
            </div>
            
        );
    }
}

export default MatcherDOM;