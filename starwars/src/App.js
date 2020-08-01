import React from 'react';
import CharacterContainer from './components/CharacterContainer';
import styled from 'styled-components';
import darth from './images/darth.jpg';
//parent styles for app
import './App.css';




export default function App() {

  return (
    <div className="App">
      <ParentContainer>
        <h1>Characters</h1>
        <CharacterContainer />
      </ParentContainer>
    </div>
  );
}
const ParentContainer = styled.div `
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  background: url(${darth});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  h1 {
    margin-left: 1%;
    color: white;
    font-family: 'Roboto Mono', monospace;
  }
`
// font-family: 'Anton', sans-serif;

// font-family: 'Red Rose', cursive;

// font-family: 'Roboto Mono', monospace;
    