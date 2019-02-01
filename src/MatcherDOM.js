import React, { Component } from 'react';
import axios from 'axios';
import User from './User/User.js';
import './Stylesheets/Matcher.css';

class MatcherDOM extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            user : ""
        }
    }


    handleChange = (event) => {
        this.setState({ id: event.target.value })
    }

    getUserById = () => {
        axios.get('http://localhost:8081/solo-project-games-api/api/user/getUserById/'+ this.state.id).then(response => {
            this.setState({ user: response.data })
            console.log(this.state.user);
            //this.getGames();
        })
    }

    getGame = () => {
        axios.get('http://localhost:8081/solo-project-games-api/api/game/getGameByGenre/'+ this.user.gameGenre)
    }

    //this.getUserById

    render() {
        let games = [];

        return (
            <div className="gameMatcher">
                <div className="header">
                    <h1>Matcher</h1>
                </div>
                <div className="matcherDOM">
                    <div className="findUser">
                        <form className="userForm" onSubmit={(e) => e.preventDefult()}>
                            <h1 className="formTitle">Find A User</h1>
                            <label for="id">ID</label><input className="id" type="number" placeholder="ID of account to Find" onChange={this.handleChange} required />
                            <button className="userSubmit" onclick={this.getUserById}>Match Games</button>
                        </form>
                    </div>
                    <div>
                        Test Text
                    </div>
                </div>
            </div>
        )
    }
}

export default MatcherDOM;