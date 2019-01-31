import React, { Component } from 'react';
import axios from 'axios';

class DeleteGame extends Component {

    constructor() {
        super();
        this.state = {
            message: "",
            id: 0
        }
    }

    deleteGame = () => {
        axios.delete('http://localhost:8081/solo-project-games-api/api/game/deleteGame/' + this.state.id)
        .then(response => {this.props.message(response.data)})
    }

    handleChange = (event) => {
        this.setState({id : event.target.value})

        event.preventDefault();
    }

    render() {
        return (
            <div className="deleteGame">
                <form className="gameForm" onSubmit={(e) => e.preventDefault()}>
                    <h1 className="formTitle">Delete A Game</h1>
                    <label for="id">ID</label><input className="id" type="number" placeholder="ID of account to Delete" onChange={this.handleChange} required />
                    <button type="submit" className="gameSubmit" onClick={this.deleteGame}>Delete Game</button>
                </form>
            </div>
        );
    }
}
export default DeleteGame;