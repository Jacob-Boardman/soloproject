import React, { Component } from 'react';
import axios from 'axios';

class UpdateGame extends Component {

    constructor() {
        super();
        this.state = {
            message: "",
            firstName: "",
            secondName: "",
            age: 0,
            gameGenre: "",
            id: 0
        }
    }

    updateGame = () => {
        axios.put('/api/game/updateGame/' + this.state.id, {
            title: this.state.title,
            ageRating: this.state.ageRating,
            gameGenre: this.state.gameGenre
        }).then(response => {
            this.props.message(response.data)
        })
    }


    handleChange = (event) => {
        // eslint-disable-next-line default-case
        switch (event.target.className) {
            case "id":
                this.setState({
                    id: event.target.value
                })
                break;
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

    handleSubmit = (event) => {
        event.preventDefault();
        if (!event.target.checkValidity()) {
            return;
        } else {
            this.updateGame();
        }
    }


    render() {
        return (
            <div className=" updateGame" >
                <form className="gameForm" onSubmit={this.handleSubmit} noValidate>
                    <h1 className="formTitle">Update A Game</h1>
                    <label htmlFor="id">ID</label><input className="id" type="number" placeholder="ID of Game to update" onChange={this.handleChange} required />
                    <label htmlFor="title">Game Title</label><input className="title" type="text" placeholder="Title..." onChange={this.handleChange} required />
                    <label htmlFor="ageRating">Age Rating</label><input className="ageRating" type="number" placeholder="Type a numbered age rating" onChange={this.handleChange} required />
                    <label htmlFor="gameGenre">Favourite Game genre</label><select className="gameGenre" onChange={this.handleChange} required>
                        <option value="" disabled defaultValue>Select a Genre</option>
                        <option value="rpg">RPG</option>
                        <option value="shooter">Shooter</option>
                        <option value="strategy">Strategy</option>
                        <option value="racing">Racing</option>
                        <option value="multiplayer">Multiplayer</option>
                    </select>
                    <button className="gameSubmit" type="submit">Update Game</button>
                </form>
            </div >
        );
    }
}
export default UpdateGame;