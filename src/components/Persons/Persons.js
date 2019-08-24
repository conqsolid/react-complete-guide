import React, { Component } from 'react';
import Person from './Person/Person';

<<<<<<< HEAD
class Persons extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("[Persons.js] rendering...");
        return (
            this.props.persons.map((person, index) => {
                return (
                    <Person
                        key={person.id}
                        change={(event) => this.props.changed(event, person.id)}
                        clickDelete={this.props.clickedDelete.bind(this, person.id)}
                        name={person.name}
                        age={person.age}
                    >
                        {person.id}
                    </Person>
                )
            }
=======
const Persons = (props) => {
    return (
        props.persons.map((person, index) => {
            return (
                <Person
                    key={person.id}
                    change={(event) => props.changed(event, person.id)}
                    clickDelete={props.clickedDelete.bind(this, person.id)}
                    name={person.name}
                    age={person.age}
                >
                    {person.id}
                </Person>
>>>>>>> parent of ada3f88... Component lifecycle methods
            )
        )
    }
}
export default Persons;
