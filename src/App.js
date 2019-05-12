import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {

    //With jsx
    return (
      <div className="App">
        <h1>Hello I'm a React App</h1>
        <p>This really works.</p>
        <Person name="Max" age="28" />
        <Person name="Manu" age ="29">My Hobbies: Racing</Person>
        <Person name="Stephanie" age="30"/>
      </div>
    );

    //Wihhout jsx
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I\'m a React App.'));
  }
}

export default App;
