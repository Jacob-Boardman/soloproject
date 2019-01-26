import React, { Component } from 'react';

class DeleteUser extends Component {
    render() {
        return (        
            <div>
                 <label for="firstName">First Name</label><input className="firstName" type="text" placeholder="First Name..." />
            </div>
        );
    }
}
export default DeleteUser;