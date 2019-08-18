import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
import { StyleRoot } from 'radium'

const App = props => {

  const [statePersons, setPersons] = useState({
    persons: [
      { id: 'ass', name: 'Max', age: 28 },
      { id: 'asa', name: 'Paul', age: 39 },
      { id: 'asg', name: 'Judy', age: 34 }
    ],
  })

  const [showPersons, setShow] = useState(false)

  const nameChangedHandler = (event, id) => {
    const personIndex = statePersons.persons.findIndex(
      p => {
        return p.id === id;
      }
    )
    const person = {
      ...statePersons.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...statePersons.persons]

    persons[personIndex] = person
    setPersons({ persons })
  }

  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '3x solid gray',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  }

  let persons = null

  if (showPersons) {
    persons = (
      <div>
        {statePersons.persons.map((person, i) => {
          return <Person
            key={person.id}
            name={person.name}
            age={person.age}
            changed={(event) => nameChangedHandler(event, person.id)}
          />
        })}
      </div>
    )
    //teste
    style.backgroundColor = 'red'
    style[':hover'] = {
      backgroundColor: 'lightred',
      color: 'black'
    }
  }

  return (
    <StyleRoot>
      <div className="App">

        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {persons}
        <button
          style={style}
          onClick={(event) => setShow(!showPersons)}>Show Persons</button>
      </div >
    </StyleRoot>
  );
}

export default App;