import React from 'react'
import Person from './Person'

function List() {

    const persons = [
        {
            id: 1,
            name:'Nomfundo',
            age: 34,
            skill: 'React'
        },
        {
            id: 2,
            name:'Mothusi',
            age: 34,
            skill: 'Angular'
        },
        {
            id: 3,
            name:'Felleng',
            age: 34,
            skill: 'Java'
        },
        {
            id: 4,
            name:'Blessing',
            age: 45,
            skill: 'C#'
        },
        {
            id: 6,
            name:'Tumi',
            age: 30,
            skill: 'C++'
        }
    ]

    const names = ['Java','C','Python','C#']

    const personList = persons.map(person => (
        <Person key={person.id} person={person} />
    ))

    const nameList = names.map((name,index) => (
        <h2 key={index}>{name}, {++index}</h2>
    ))

    return (
        <div>
            {
                personList
            }
            {
                nameList
            }
        </div>
    )
}

export default List
