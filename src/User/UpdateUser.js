import React, { Component } from 'react';

class UpdateUser extends Component {
    render() {
        return (
            <div className=" updateUser" >
                <form className="userForm">
                    <h1 className="formTitle">Update A User</h1>
                    <label for="id">ID</label><input className="id" type="number" placeholder="ID of account to update" required />
                    <label for="firstName">First Name</label><input className="firstName" type="text" placeholder="First Name..." />
                    <label for="secondName">Second Name</label><input className="secondName" type="text" placeholder="Second Name..." />
                    <label for="age">Age</label><input className="age" type="number" placeholder="Age..." />
                    <label for="gameGenre">Favourite Game genre</label><select className="gameGenre" >
                        <option value="" disabled selected>Select a Genre</option>
                        <option value="rpg">RPG</option>
                        <option value="shooter">Shooter</option>
                        <option value="strategy">Strategy</option>
                        <option value="racing">Racing</option>
                        <option value="multiplayer">Multiplayer</option>
                    </select>
                    <button className="userSubmit" >Update User</button>
                </form>
            </div >
        );
    }
}
export default UpdateUser;