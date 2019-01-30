import React, { Component } from 'react';

class DisplayMessage extends Component {
    render() {
        return (        
            <div className="displayMessage">
                 {this.props.message}
            </div>
        );
    }
}
export default DisplayMessage;