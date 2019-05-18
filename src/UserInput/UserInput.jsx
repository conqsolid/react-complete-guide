import React, { Component } from 'react';

export default class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <input placeholder="User Name" type="text" onChange={this.props.change} value={this.props.currentName} />
            </div>
        )
    }
}