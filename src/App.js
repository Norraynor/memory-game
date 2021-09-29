import React, {useState} from 'react';
import './App.css';
import Card from "./components/Card.js"

function App() {
  const [score,setScore] = useState({});
  const [bestScore,setBestScore] = useState({});

  //add cards as objects with names and img
  return (
    <div className="App">
      <div id="top-header">
        <div id="title">POKEMON MEMORY GAME</div>
        <div id="score">
          <div>score: {score} </div>
          <div>best score: {bestScore} </div>
        </div>
      </div>
      --display cards here--
      --clicking on card shuffles them randomly and remembers card clicked--
      --clicking the same card twice results in game over and reseting the score and saving best score if its bigger than previous one--
      <div id="cards">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </div>

    </div>
  );
}

export default App;
