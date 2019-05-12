import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    //With jsx
    // return (
    //   <div className="App">
    //    <h1>Hello I'm a React App</h1>
    //    </div>
    // );

    //Wihhout jsx
    return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I\'m a React App.'));
  }
}

export default App;
