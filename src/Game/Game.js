import React, { Component } from 'react';

class Game extends Component {
    render() {
        return (
            <div className="results">
                <form>
                    <h2 className="formTitle">Game&nbsp;{+ this.props.game.id}</h2>
                    Title:&nbsp;{this.props.game.title}
                    <br />
                    Age Rating:&nbsp;{this.props.game.ageRating}
                    <br />
                    Game genre:&nbsp;{this.props.game.gameGenre}
                </form>
            </div>
        );
    }
}

export default Game;