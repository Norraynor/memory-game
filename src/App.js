import React, {useState} from 'react';
import './App.css';
import Card from "./components/Card.js"
import Abra from "./images/Abra.png"
import Blastoise from "./images/Blastoise.png"
import Charizard from "./images/Charizard.png"
import Dratini from "./images/Dratini.png"
import Eevee from "./images/Eevee.png"
import Gastly from "./images/Gastly.png"
import Kakuna from "./images/Kakuna.png"
import Machamp from "./images/Machamp.png"
import Pidgey from "./images/Pidgey.png"
import Pikachu from "./images/Pikachu.png"



function App() {
  const cardsArray = [
    {
      name: "Abra",
      img: Abra
    },
    {
      name: "Blastoise",
      img: Blastoise
    },
    {
      name: "Charizard",
      img: Charizard
    },
    {
      name: "Dratini",
      img: Dratini
    },
    {
      name: "Eevee",
      img: Eevee
    },
    {
      name: "Gastly",
      img: Gastly
    },
    {
      name: "Kakuna",
      img: Kakuna
    },
    {
      name: "Machamp",
      img: Machamp
    },
    {
      name: "Pidgey",
      img: Pidgey
    },
    {
      name: "Pikachu",
      img: Pikachu
    }
  ];
  const [score,setScore] = useState(0);
  const [bestScore,setBestScore] = useState(0);
  const [clickedArray, setClickedArray] = useState([]);

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  function setClicked(name){
    if(clickedArray.includes(name)){
      if(score>bestScore){
        setBestScore(score);
      }
      setScore(0);
      setClickedArray([]);

    }else{
      setClickedArray([...clickedArray,name]);
      setScore(score+1);
    }
  }
  //add cards as objects with names and img
  return (
    <div className="App">
      <div id="top-header">
        <div id="title">POKEMON MEMORY GAME</div>
        <div id="score">
          <div>score: {score} </div>
          <div>best score: {bestScore}  </div>
        </div>
      </div>
      <div id="description">RULES: Click once per card to get a point. Each click reshuffles the cards.</div>
      <div id="cards">
        {
          shuffle(cardsArray).map(element => {
            return (<Card name={element.name} img={element.img} clickHandler={setClicked}/>)
          })
        }
      </div>

    </div>
  );
}

export default App;
