import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


export default class Practice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: ""
        }
    }

    inputChangeHandler = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    render() {
        return (
            <div>
                <UserInput change={this.inputChangeHandler} currentName={this.state.userName} />
                <UserOutput userName={this.state.userName} />
            </div>
        )
    }
}