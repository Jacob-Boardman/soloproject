import React, { Component } from 'react';

class FindGame extends Component {
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
        this.props.game(this.state.id);
    }
    render() {
        return (
            <div className="findGame">
                <form className="gameForm" onSubmit={this.changeId}>
                    <h1 className="formTitle">Find A Game</h1>
                    <label for="id">ID</label><input className="id" type="number" placeholder="ID of account to Find" onChange={this.handleChange} required />
                    <button className="gameSubmit" type="submit">Find Game</button>
                </form>
            </div>
        );
    }
}
export default FindGame;