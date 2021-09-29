import React from 'react';
import '../styles/Card.css';

function Card(props){
    return(
        <div className="card">
            <h1>card here</h1>
            <img src={props.img} alt={props.name}/>
            <h3>{props.name}</h3>
        </div>
    );
}
export default Card;
