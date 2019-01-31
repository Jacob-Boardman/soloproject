import React, { Component } from 'react';

class AllUsers extends Component {
    render() {
        return (
            <div className="results">
                <form>
                    <h2 className="formTitle">User&nbsp;{+ this.props.user.id}</h2>
                    First Name:&nbsp;{this.props.user.firstName}
                    <br />
                    Second Name:&nbsp;{this.props.user.secondName}
                    <br />
                    Age:&nbsp;{this.props.user.age}
                    <br />
                    Favourite Game genre:&nbsp;{this.props.user.gameGenre}
                </form>
            </div>

        );
    }
}

export default AllUsers;