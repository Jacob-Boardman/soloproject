import React, { Component } from 'react';
import axios from 'axios';

class CreateGame extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            ageRating: 0,
            gameGenre: ""
        }
    }

    createGame = () => {
        axios.post('http://35.242.187.147:8081/solo-project-games-api/api/game/createGame', {
            title: this.state.title,
            ageRating: this.state.ageRating,
            gameGenre: this.state.gameGenre
        }).then(response => {
            this.props.message(response.data);
        });
    }

    handleChange = (event) => {
        // eslint-disable-next-line default-case
        switch (event.target.className) {
            case "title":
                this.setState({
                    title: event.target.value
                })
                break;
            case "ageRating":
                this.setState({
                    ageRating: event.target.value
                })
                break;
            case "gameGenre":
                this.setState({
                    gameGenre: event.target.value
                })
                break;

        }
        event.preventDefault();
    }

    render() {
        return (
            <div className="createGame" >
                <form className="gameForm" onSubmit={this.createGame()}>
                    <h1 className="formTitle">Create A Game</h1>
                    <label htmlfor="title">Game Title</label><input className="title" type="text" placeholder="Title..." onChange={this.handleChange} required />
                    <label htmlfor="ageRating">Age Rating</label><input className="ageRating" type="number" placeholder="Type a numbered age rating" onChange={this.handleChange} required />
                    <label htmlfor="gameGenre">Favourite Game genre</label><select className="gameGenre" onChange={this.handleChange} required>
                        <option value="" disabled selected>Select a Genre</option>
                        <option value="rpg">RPG</option>
                        <option value="shooter">Shooter</option>
                        <option value="strategy">Strategy</option>
                        <option value="racing">Racing</option>
                        <option value="multiplayer">Multiplayer</option>
                    </select>
                    <button  className="gameSubmit" type="submit">Create Game</button>
                </form>
            </div >
        );
    }
}
export default CreateGame;

