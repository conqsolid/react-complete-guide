import React, { Component } from 'react';
import logo from './logo.svg';
import cssClasses from './App.css';
import Person from './Person/Person';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showPersons: true,
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

    const showPersons = this.state.showPersons;

    let persons = [];
    const assignedClasses = [];

    let buttonClass = '';

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

      //css loader also work on pseudo selectors
      buttonClass = cssClasses.Red;
    }

    if (this.state.persons.length <= 2) {
      assignedClasses.push(cssClasses.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(cssClasses.bold);
    }

    //With jsx
    return (
        <div className={cssClasses.App}>
          <h1>Hello I'm a React App</h1>
          <p className={assignedClasses.join(" ")}>This really works.</p>
          <button className={buttonClass} onClick={this.togglePersons}>Toggle Persons</button>
          {persons}
        </div>
    );

    //Wihhout jsx
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I\'m a React App.'));
  }
}

export default App;
