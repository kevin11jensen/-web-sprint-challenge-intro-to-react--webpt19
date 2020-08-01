import React from 'react';
import styled from 'styled-components';



export function Character(props) {
    // console.log('CharacterCard props:', props)
    return (
        <Card>
            <h1><span>Name: </span> {props.character.name}</h1>
            <h3>DOB: {props.character.birth_year}</h3>
            <h2><span>Gender: </span> {props.character.gender}</h2>
            <h2><span className = 'height'>Height: </span>  {props.character.height}</h2>
            <h2>Mass: {props.character.mass}</h2>
        </Card>
    );
}

const Card = styled.div `
    
    width: 22%;
    height: 22rem;
    margin: 1%;
    background: tranparent;
    border: .3rem dashed black;
    border-radius: .5rem;
    color: white;
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        width: 100%;
        height: 25rem;
    }
    h1 {
        font-size: 1.6rem;
        padding: 1%;
        font-family: 'Roboto Mono', monospace;
        span {
            color: lightsteelblue;
        }
        
    }
    h2 {
        font-size: 1.2rem;
        padding: 1%;
        font-family: 'Roboto Mono', monospace;
        span {
            color: aquamarine;
            font-family: 'Red Rose', cursive;
        }
        .height {
            color: chartreuse;
            
        }
    }
    h3 {
        padding-left: 1%;
        color: gold;
        font-family: 'Red Rose', cursive;
    }
`


// font-family: 'Anton', sans-serif;

// font-family: 'Red Rose', cursive;

// font-family: 'Roboto Mono', monospace;