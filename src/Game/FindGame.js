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
                <form className="gameForm" onSubmit={(e) => e.preventDefault()}>
                    <h1 className="formTitle">Find A Game</h1>
                    <label for="id">ID</label><input className="id" type="number" placeholder="ID of account to Find" onChange={this.handleChange} required />
                    <button className="gameSubmit" onClick={this.changeId}>Find Game</button>
                </form>
            </div>
        );
    }
}
export default FindGame;