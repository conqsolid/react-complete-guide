import React, { Component } from 'react';
import cssClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {

  constructor(props) {
    super(props);
    console.log("[App.js] construct");
    this.state = {
      showPersons: false,
      persons: [
        { id: Math.floor(Math.random() * 1000), name: "Max", age: 28 },
        { id: Math.floor(Math.random() * 1000), name: "Manu", age: 29 },
        { id: Math.floor(Math.random() * 1000), name: "Stephanie", age: 30 }
      ]
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js getDerivedStateFromProps]", props);
    return state;
  }

  componentDidMount() {
      console.log("[App.js] componentDidMount");
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
    console.log("[App.js] rendering...");
    const showPersons = this.state.showPersons;

    let persons = [];
    if (showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clickedDelete={this.deletePersonHandler}
        changed={this.inputChangeHandler}
      />
    }

    //css loader also work on pseudo selectors


    //With jsx
    return (
      <div className={cssClasses.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersons} />
        {persons}
      </div>
    );

    //Wihhout jsx
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I\'m a React App.'));
  }
}

export default App;
