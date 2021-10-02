import React from 'react';
import '../styles/Card.css';

function Card(props){
    function handleClick(){
        props.clickHandler(props.name);
    }
    return(
        <div className="card" onClick={handleClick}>
            <img src={props.img} alt={props.name}/>
            <h3 id="title">{props.name}</h3>
        </div>
    );
}
export default Card;
