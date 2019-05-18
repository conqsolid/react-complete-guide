import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showPersons: false,
      persons: [
        { name: "Max", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 30 }
      ]
    }
  }

  togglePersons = () => {
    const showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons
    });
  }

  inputChangeHandler = (event) => {
    this.state.persons.forEach((person, index) => {
      this.switchNameHandler(index, event.target.value);
    })
  }

  switchNameHandler = (index, name) => {
    var persons = this.state.persons;
    persons[index].name = name;
    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (index) => {
    const persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  }

  render() {

    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: "1px solid blue",
      padding: '8px',
      cursor: 'pointer'

    }

    //With jsx
    return (
      <div className="App">
        <h1>Hello I'm a React App</h1>
        <p>This really works.</p>
        <button style={buttonStyle} onClick={this.togglePersons}>Toggle Persons</button>
        {
          this.state.showPersons ?
            this.state.persons.map((person, index) => {
              return (<Person key={index} change={this.inputChangeHandler} click={this.deletePersonHandler.bind(this, index)} name={person.name} age={person.age}>

                {index}

              </Person>)
            })
            : null
        }
      </div>
    );

    //Wihhout jsx
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I\'m a React App.'));
  }
}

export default App;
