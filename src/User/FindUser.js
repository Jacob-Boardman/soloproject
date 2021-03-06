import React, { Component } from 'react';

class FindUser extends Component {
    constructor() {
        super();
        this.state = {
            id: 0
        }
    }


    handleChange = (event) => {
        this.setState({ id: event.target.value })
    }

    changeId = () => {
        this.props.user(this.state.id);
    }

    render() {
        return (
            <div className="findUser">
                <form className="userForm">
                    <h1 className="formTitle">Find A User</h1>
                    <label htmlFor="id">ID</label><input className="id" type="number" placeholder="ID of account to Find" onChange={this.handleChange} required />
                    <button className="userSubmit" type="button" onClick={this.changeId}>Find User</button>
                </form>
            </div>
        );
    }
}
export default FindUser;