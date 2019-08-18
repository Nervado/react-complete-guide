import React, { useState } from 'react';
import classes from './App.css';
import Person from './Person/Person'
//import { StyleRoot } from 'radium'

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

  /* 
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
 */
  let persons = null
  let btnClass = ''

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

    btnClass = classes.Red

    /*
    style.backgroundColor = 'red'
    style[':hover'] = {
      backgroundColor: 'lightred',
      color: 'black'
    }
    */
  }

  // dinamic css

  const assignedClasses = []
  if (statePersons.persons.length <= 2) {
    assignedClasses.push(classes.red);// classes = ['red'] 
  }

  if (statePersons.persons.length <= 1) {
    assignedClasses.push(classes.bold);// classes = ['red','bold'] 
  }

  // dinamic css with css modules
  return (
    //<StyleRoot>
    <div className={classes.App}>

      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      {persons}
      <button
        className={btnClass}
        //style = {style}
        onClick={(event) => setShow(!showPersons)}>Show Persons</button>
    </div >
    //</StyleRoot>
  );
}

export default App;