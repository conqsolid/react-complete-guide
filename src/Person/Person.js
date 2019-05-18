import React from 'react';
import cssClasses from './Person.css';

//css classes also work with media queries

const person = (props) => {
    return (
        <div className={cssClasses.Person}>
            <p className="deneme">I'm {props.name} and I'm at {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
            <button onClick={props.clickDelete}>Delete Object</button>
        </div>
    )
};

export default person;