import React, { Component } from 'react';

class CreateUser extends Component {
    render() {
        return (
            <div className="createUser" >
                <form className="userForm">
                    <h1 className="formTitle">Create A User</h1>
                    <label for="firstName">First Name</label><input className="firstName" type="text" placeholder="First Name..." required />
                    <label for="secondName">Second Name</label><input className="secondName" type="text" placeholder="Second Name..." required />
                    <label for="age">Age</label><input className="age" type="number" placeholder="Age..." required />
                    <label for="gameGenre">Favourite Game genre</label><select className="gameGenre" required>
                        <option>Select a Game genre</option>
                        <option value="rpg">RPG</option>
                        <option value="shooter">Shooter</option>
                        <option value="strategy">Strategy</option>
                        <option value="racing">Racing</option>
                        <option value="multiplayer">Multiplayer</option>
                    </select>
                    <button className="userSubmit" >Create User</button>
                </form>
            </div >
        );
    }
}
export default CreateUser;

