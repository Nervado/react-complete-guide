import React from 'react';
import './Person.css'
import { StyleRoot } from 'radium'

const Person = (props) => {

    const style = {
        '@media (min-width:500px)': {
            width: '450px'
        }
    }

    return (
        <StyleRoot>
            <div className="Person" style={style}>
                <p>I'm a Person! My name is {props.name}!</p>
                <p>{props.children}</p>
                <p>My age is {props.age} years!</p>
                <input type="text" onChange={props.changed}></input>
            </div>
        </StyleRoot>
    );
};

export default Person;