import React, { Component } from 'react';
import CreateGames from './CreateGame.js';
import UpdateGames from './UpdateGame.js';
import DeleteGame from './DeleteGame.js';
import FindGame from './FindGame.js';
import DisplayMessage from '../DisplayMessage.js';
import '../Stylesheets/Game.css';
import axios from 'axios';
import Game from './Game.js';


class GamesDom extends Component {
    constructor() {
        super();
        this.state = {
            message: "",
            game: []
        }
    }

    setMessage = (inputMessage) => {
        this.setState({ message: inputMessage });
    }

    getGameById = (gameId) => {
        axios.get('http://game-matcher.uksouth.cloudapp.azure.com/solo-project-games-api/api/game/getGameById/' + gameId).then(response => {
            this.setState({ game: response.data })
        })
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h1>Game Database</h1>
                </div>
                <div className="gameDOM">
                    <CreateGames message={this.setMessage} />
                    <UpdateGames message={this.setMessage} />
                    <div>
                        <DeleteGame message={this.setMessage} />
                        <FindGame game={this.getGameById}/>
                    </div>
                    <div>
                        <DisplayMessage message={this.state.message} />
                        <Game game={this.state.game} />
                    </div>
                </div>

            </div>

        );
    }
}

export default GamesDom;