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
=======
const person = (props) => {
    return (
        <div className={cssClasses.Person}>
            <p className="deneme">I'm {props.name} and I'm at {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
            <button onClick={props.clickDelete}>Delete Object</button>
        </div>
    )
>>>>>>> parent of ada3f88... Component lifecycle methods
};

export default Person;