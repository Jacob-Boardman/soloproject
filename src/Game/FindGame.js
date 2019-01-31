import React, { Component } from 'react';

class FindGame extends Component {
    render() {
        return (
            <div className="findGame">
                <form className="gameForm">
                    <h1 className="formTitle">Find A Game</h1>
                    <label for="id">ID</label><input className="id" type="number" placeholder="ID of account to Find" required />
                    <button className="gameSubmit" >Find Game</button>
                </form>
            </div>
        );
    }
}
export default FindGame;