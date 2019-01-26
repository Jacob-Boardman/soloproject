import React, { Component } from 'react';

class AllUsers extends Component {
    render() {
        return (
            <div className="user">
                <form>
                    First Name:&nbsp;{this.props.user.firstName}
                    <br/>
                    Second Name:&nbsp;{this.props.user.secondName}
                </form>
            </div>

        );
    }
}

export default AllUsers;