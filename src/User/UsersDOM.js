import React, { Component } from 'react';
import CreateUsers from './CreateUser.js';
import UpdateUsers from './UpdateUser.js';
import DeleteUser from './DeleteUser.js';
import FindUser from './FindUser.js';
import DisplayMessage from '../DisplayMessage.js';


class Users extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <h1>User Database</h1>
                </div>
                <div class="userDOM">
                    <CreateUsers/>
                    <UpdateUsers/>
                    <div>
                        <DeleteUser/>
                        <FindUser/>
                    </div>
                    <DisplayMessage/>
                </div>
                
            </div>

        );
    }
}

export default Users;