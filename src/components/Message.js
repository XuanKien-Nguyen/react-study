import React, { Component } from 'react';
import './style.css';


class Message extends Component {
    render() {

        var {message} = this.props;
        return (
            <h3>
                <span className="badge bg-dark darken-2">
                    {message}
                </span>
            </h3>
        );
    }
}

export default Message;
