import React, { Component } from 'react';

class DisplayMessage extends Component {
    render() {
        return (        
            <div>
                 {this.props.message}
            </div>
        );
    }
}
export default DisplayMessage;