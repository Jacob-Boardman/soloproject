import React, { Component } from 'react';

class DeleteUser extends Component {
    render() {
        return (
            <div className="deleteUser">
                <form className="userForm">
                    <h1 className="formTitle">Delete A User</h1>
                    <label for="id">ID</label><input className="id" type="number" placeholder="ID of account to Delete" required />
                    <button className="userSubmit" >Delete User</button>
                </form>
            </div>
        );
    }
}
export default DeleteUser;