import React, { Component } from 'react';
import axios from 'axios';

class DeleteUser extends Component {

    constructor() {
        super();
        this.state = {
            message: "",
            id: 0
        }
    }

    deleteUser = () => {
        axios.delete('/api/user/deleteUser/' + this.state.id)
        .then(response => this.props.message(response.data))
    }

    handleChange = (event) => {
        this.setState({id : event.target.value})
        event.preventDefault();
    }

    render() {
        return (
            <div className="deleteUser">
                <form className="userForm" onSubmit={this.deleteUser}>
                    <h1 className="formTitle">Delete A User</h1>
                    <label htmlFor="id">ID</label><input className="id" type="number" placeholder="ID of account to Delete" onChange={this.handleChange} required />
                    <button type="submit" className="userSubmit">Delete User</button>
                </form>
            </div>
        );
    }
}
export default DeleteUser;