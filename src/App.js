import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showPersons: false,
      persons: [
        { id: Math.floor(Math.random() * 1000), name: "Max", age: 28 },
        { id: Math.floor(Math.random() * 1000), name: "Manu", age: 29 },
        { id: Math.floor(Math.random() * 1000), name: "Stephanie", age: 30 }
      ]
    }
  }

  togglePersons = () => {
    const showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons
    });
  }

  inputChangeHandler = (event, id) => {

    const persons = [...this.state.persons];
    const personIndex = persons.findIndex((item) => {
      return item.id === id;
    });

    const person = {
      ...persons[personIndex]
    }

    person.name = event.target.value;

    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (id) => {
    const persons = [...this.state.persons];
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });

    persons.splice(personIndex, 1);

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
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'blue'
      }
    }

    const showPersons = this.state.showPersons;

    let persons = [];
    const paragraphClasses = [];

    if (showPersons) {
      persons = (
        this.state.persons.map((person, index) => {
          return (
            <Person
              key={person.id}
              change={(event) => this.inputChangeHandler(event, person.id)}
              clickDelete={this.deletePersonHandler.bind(this, person.id)}
              name={person.name}
              age={person.age}
            >
              {person.id}
            </Person>
          )
        })
      );

      buttonStyle.backgroundColor = "red";

    }

    if (this.state.persons.length <= 2) {
      paragraphClasses.push('red');
    }

    if (this.state.persons.length <= 1) {
      paragraphClasses.push('bold');
    }

    //With jsx
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hello I'm a React App</h1>
          <p className={paragraphClasses.join(" ")}>This really works.</p>
          <button style={buttonStyle} onClick={this.togglePersons}>Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );

    //Wihhout jsx
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I\'m a React App.'));
  }
}

export default Radium(App);
