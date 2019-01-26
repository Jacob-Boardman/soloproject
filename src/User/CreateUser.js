import React, { Component } from 'react';
import axios from 'axios';

class CreateUser extends Component {
    constructor() {
        super();
        this.state = {
            message: "",
            firstName: "",
            secondName: "",
            age: 0,
            gameGenre: ""
        }
    }

    createUser = () => {
        axios.post('http://localhost:8081/solo-project-games-api/api/user/createUser', {
            firstName: this.state.firstName,
            secondName: this.state.secondName,
            age: this.state.age,
            gameGenre: this.state.gameGenre
        }).then(response => {
            this.setState({ message: response });
            console.log(this.state.message);
        });
    }

    handleChange = (event) => {
        // eslint-disable-next-line default-case
        switch (event.target.className) {
            case "firstName":
                this.setState({
                    firstName: event.target.value
                })
                console.log(this.state.firstName)
                break;
            case "secondName":
                this.setState({
                    secondName: event.target.value
                })
                break;
            case "ageName":
                this.setState({
                    age: event.target.value
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
            <div className="createUser" >
                <form className="userForm">
                    <h1 className="formTitle">Create A User</h1>
                    <label for="firstName">First Name</label><input className="firstName" type="text" placeholder="First Name..." onChange={this.handleChange} required />
                    <label for="secondName">Second Name</label><input className="secondName" type="text" placeholder="Second Name..." onChange={this.handleChange} required />
                    <label for="age">Age</label><input className="age" type="number" placeholder="Age..." onChange={this.handleChange} required />
                    <label for="gameGenre">Favourite Game genre</label><select className="gameGenre" onChange={this.handleChange} required>
                        <option value="" disabled selected>Select a Genre</option>
                        <option value="rpg">RPG</option>
                        <option value="shooter">Shooter</option>
                        <option value="strategy">Strategy</option>
                        <option value="racing">Racing</option>
                        <option value="multiplayer">Multiplayer</option>
                    </select>
                    <button type="button" className="userSubmit" onClick={this.createUser}>Create User</button>
                </form>
            </div >
        );
    }
}
export default CreateUser;

