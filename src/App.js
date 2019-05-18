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
        { id: "1ryvs", name: "Max", age: 28 },
        { id: "3euqo", name: "Manu", age: 29 },
        { id: "5gi53", name: "Stephanie", age: 30 }
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
    const personIndex = this.state.persons.findIndex( (person) =>{
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
            : null
        }
      </div>
    );

    //Wihhout jsx
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I\'m a React App.'));
  }
}

export default App;
