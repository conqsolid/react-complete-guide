import React from 'react';
import './Person.css';
import Radium from 'radium';

const personsStyle = {
    '@media(min-width:500px)': {
        width: '450px'
    }
}

const person = (props) => {
    return (
        <div style={personsStyle} className="Person">
            <p>I'm {props.name} and I'm at {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
            <button onClick={props.clickDelete}>Delete Object</button>
        </div>
    )
};

export default Radium(person);