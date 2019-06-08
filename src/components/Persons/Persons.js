import React, { Component } from 'react';
import Person from './Person/Person';

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
            )
        )
    }
}
export default Persons;
