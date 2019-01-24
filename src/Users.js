import React, { Component } from 'react';
import CreateUsers from './CreateUser';


class Users extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <h1>User Database</h1>
                </div>
                <div>
                    <CreateUsers/>
                </div>
            </div>

        );
    }
}

export default Users;