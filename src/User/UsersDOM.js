import React, { Component } from 'react';
import CreateUsers from './CreateUser.js';
import UpdateUsers from './UpdateUser.js';
import DeleteUser from './DeleteUser.js';
import FindUser from './FindUser.js';
import DisplayMessage from '../DisplayMessage.js';
import '../Stylesheets/User.css';
import axios from 'axios';
import User from './User.js';


class UsersDom extends Component {
    constructor() {
        super();
        this.state = {
            message: "",
            user: []
        }
    }

    setMessage = (inputMessage) => {
        this.setState({ message: inputMessage });
    }

    getUserById = (userId) => {
        axios.get('http://35.242.187.147:8081/solo-project-games-api/api/user/getUserById/' + userId).then(response => {
            this.setState({ user: response.data })
        })
    }

    render() {

        return (
            <div>
                <div className="header">
                    <h1>User Database</h1>
                </div>
                <div className="userDOM">
                    <CreateUsers message={this.setMessage} />
                    <UpdateUsers message={this.setMessage} />
                    <div>
                        <DeleteUser message={this.setMessage} />
                        <FindUser user={this.getUserById} />
                    </div>

                    <div>
                        <DisplayMessage message={this.state.message} />
                        <User user={this.state.user} />
                    </div>
                </div>

            </div>

        );
    }
}

export default UsersDom;