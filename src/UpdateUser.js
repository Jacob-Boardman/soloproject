import React, { Component } from 'react';
//import './CreateUser.css';

class UpdateUser extends Component {
    render() {
        return (
            <div className=" updateUser" >
                <form className="userForm">
                <h1 className="formTitle">Update A User</h1>
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
                    <input type="submit" value="Update User" className="userSubmit" />
                </form>
            </div >
        );
    }
}
export default UpdateUser;