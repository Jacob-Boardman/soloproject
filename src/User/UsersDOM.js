import React, { Component } from 'react';
import CreateUsers from './CreateUser.js';
import UpdateUsers from './UpdateUser.js';
import DeleteUser from './DeleteUser.js';
import FindUser from './FindUser.js';
import DisplayMessage from '../DisplayMessage.js';


class UsersDom extends Component {
    constructor() {
        super();
        this.state = {
            message: ""
        }
    }

    setMessage = (inputMessage) => {
        this.setState({message: inputMessage});
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h1>User Database</h1>
                </div>
                <div className="userDOM">
                    <CreateUsers message={this.setMessage}/>
                    <UpdateUsers />
                    <div>
                        <DeleteUser />
                        <FindUser />
                    </div>
                    <DisplayMessage message={this.state.message}/>
                </div>

            </div>

        );
    }
}

export default UsersDom;