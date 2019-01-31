import React, { Component } from 'react';
import CreateGames from './CreateGame.js';
import UpdateGames from './UpdateGame.js';
import DeleteGame from './DeleteGame.js';
import FindGame from './FindGame.js';
import DisplayMessage from '../DisplayMessage.js';
import '../Stylesheets/Game.css';


class GamesDom extends Component {
    constructor() {
        super();
        this.state = {
            message: ""
        }
    }

    
    setMessage = (inputMessage) => {
        this.setState({message: inputMessage});
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h1>Game Database</h1>
                </div>
                <div className="gameDOM">
                    <CreateGames message={this.setMessage}/>
                    <UpdateGames />
                    <div>
                        <DeleteGame />
                        <FindGame />
                    </div>
                    <DisplayMessage message={this.state.message}/>
                </div>

            </div>

        );
    }
}

export default GamesDom;