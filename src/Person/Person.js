import React from 'react';
import './Person.css';
const person = (props) => {
    return (
        <div className="Person">
            <p>I'm {props.name} and I'm at {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
            <button onClick={props.clickDelete}>Delete Object</button>
        </div>
    )
};

export default person;