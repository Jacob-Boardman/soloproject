import React, { Component } from 'react';
import CreateUsers from './CreateUser';
import UpdateUsers from './UpdateUser';
import DeleteUser from './DeleteUser';
import FindUser from './FindUser';
import DisplayMessage from './DisplayMessage';


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