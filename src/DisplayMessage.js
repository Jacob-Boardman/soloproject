import React, { Component } from 'react';

class DisplayMessage extends Component {
    render() {
        return (
            <div className="displayMessage">
                <div className="message">
                    <h1>Message</h1>
                    <br/>
                    {this.props.message}
                </div>
            </div>
        );
    }
}
export default DisplayMessage;