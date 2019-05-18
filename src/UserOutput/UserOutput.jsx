import React, { Component } from 'react';

export default class UserOutput extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <p>Hello</p>
                <p>User Name : {this.props.userName}</p>
            </div>
        )
    }

}