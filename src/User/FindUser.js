import React, { Component } from 'react';

class FindUser extends Component {
    render() {
        return (
            <div className="findUser">
                <form className="userForm">
                    <h1 className="formTitle">Find A User</h1>
                    <label for="id">ID</label><input className="id" type="number" placeholder="ID of account to Find" required />
                    <button className="userSubmit" >Find User</button>
                </form>
            </div>
        );
    }
}
export default FindUser;