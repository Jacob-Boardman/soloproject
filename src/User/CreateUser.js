import React, { Component } from 'react';
import axios from 'axios';

class CreateUser extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            secondName: "",
            age: 0,
            gameGenre: "",
            errors: []
        }
    }

    createUser = () => {

        axios.post('/api/user/createUser', {
            firstName: this.state.firstName,
            secondName: this.state.secondName,
            age: this.state.age,
            gameGenre: this.state.gameGenre
        }).then(response => {
            this.props.message(response.data);
        });
    }

    handleChange = (event) => {
        // eslint-disable-next-line default-case
        switch (event.target.className) {
            case "firstName":
                this.setState({
                    firstName: event.target.value
                })
                break;
            case "secondName":
                this.setState({
                    secondName: event.target.value
                })
                break;
            case "age":
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

    handleSubmit = (event) => {
        event.preventDefault();
        if (!event.target.checkValidity()) {
            return;
        } else {
            this.createUser();
        }
    }

    render() {
        return (
            <div className="createUser" >
                <form className="userForm" onSubmit={this.handleSubmit} noValidate>
                    <h1 className="formTitle">Create A User</h1>
                    <label htmlFor="firstName">First Name</label><input className="firstName" type="text" placeholder="First Name..." onChange={this.handleChange} required />
                    <label htmlFor="secondName">Second Name</label><input className="secondName" type="text" placeholder="Second Name..." onChange={this.handleChange} required />
                    <label htmlFor="age">Age</label><input className="age" type="number" placeholder="Age..." onChange={this.handleChange} required />
                    <label htmlFor="gameGenre">Favourite Game genre</label><select className="gameGenre" onChange={this.handleChange} required>
                        <option value="" disabled defaultValue>Select a Genre</option>
                        <option value="rpg">RPG</option>
                        <option value="shooter">Shooter</option>
                        <option value="strategy">Strategy</option>
                        <option value="racing">Racing</option>
                        <option value="multiplayer">Multiplayer</option>
                    </select>
                    <button className="userSubmit" type="submit">Create User</button>
                </form>
            </div >
        );
    }
}
export default CreateUser;

