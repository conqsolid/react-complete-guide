import React from 'react';

const person = () => {
    var randomAge = Math.floor(Math.random() * 30)
    return <p>I'm a Person and I'm at {randomAge} years old.</p>
}

export default person;