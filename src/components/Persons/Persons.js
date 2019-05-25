import React from 'react';
import Person from './Person/Person';

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
            )
        }
        )
    )
}

export default Persons;