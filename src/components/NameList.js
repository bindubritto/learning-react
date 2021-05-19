import React from 'react';
import Person from './Person';

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React',
        },
        {
            id: 2,
            name: 'Clark',
            age: 30,
            skill: 'React',
        },
        {
            id: 3,
            name: 'Diana',
            age: 30,
            skill: 'React',
        },
        {
            id: 4,
            name: 'Elice',
            age: 30,
            skill: 'React',
        },
    ];

    const personList = persons.map((person, index) => (
        <Person key={index} person={person}>
            {index}
        </Person>
    ));

    return <div>{personList}</div>;
}

export default NameList;
