import React, { Component } from 'react';
import axios from 'axios';

class UpdateUser extends Component {

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

    updateUser = () => {
        axios.put('/api/user/updateUser/' + this.state.id, {
            firstName: this.state.firstName,
            secondName: this.state.secondName,
            age: this.state.age,
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
                    age: Number(event.target.value)
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
            this.updateUser();
        }
    }


    render() {
        return (
            <div className=" updateUser" >
                <form className="userForm" onSubmit={this.handleSubmit} noValidate>
                    <h1 className="formTitle">Update A User</h1>
                    <label htmlFor="id">ID</label><input className="id" type="number" placeholder="ID of account to update" onChange={this.handleChange} required />
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
                    <button type="submit" className="userSubmit">Update User</button>
                </form>
            </div >
        );
    }
}
export default UpdateUser;