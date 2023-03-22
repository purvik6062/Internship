// //List Rendering
import React from 'react';
import Person1 from './Person1';

function NameList() {
    const names = ['Tony', 'Peter', 'Stephen']
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Tony',
    //         age: 30,
    //         skill: 'React'
    //     },
    //     {
    //         id: 2,
    //         name: 'Peter',
    //         age: 20,
    //         skill: 'Angular'
    //     },
    //     {
    //         id: 3,
    //         name: 'Stephen',
    //         age: 35,
    //         skill: 'Solidity'
    //     }
    // ]


    // const personList = persons.map((person) => <Person1 key={person.id} person12={person} />)
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)

    // return (
    //     <div>{personList}</div>
    // )
    return (
        <div>{nameList}</div>
    )
}
export default NameList