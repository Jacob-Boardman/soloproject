import React, { Component } from 'react';

class CreateUser extends Component {
    render() {
        return (
            <div className="createUser" >
                <form className="userForm" action="onSubmit">
                <h1 className="formTitle">Create A User</h1>
                    <label for="firstName">First Name</label><input className="firstName" type="text" placeholder="First Name..." />
                    <label for="secondName">Second Name</label><input className="secondName" type="text" placeholder="Second Name..." />
                    <label for="age">Age</label><input className="age" type="number" placeholder="Age..." />
                    <label for="gameGenre">Favourite Game genre</label><select className="gameGenre" >
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

