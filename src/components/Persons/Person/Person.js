import React, { Component } from 'react';
import cssClasses from './Person.css';

//css classes also work with media queries

<<<<<<< HEAD
class Person extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("[Person.js] rendering...");
        return (
            <div className={cssClasses.Person}>
                <p className="deneme">I'm {this.props.name} and I'm at {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name} />
                <button onClick={this.props.clickDelete}>Delete Object</button>
            </div>)
    }
};

export default Person;