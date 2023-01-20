import React from 'react';
import './Card.css';

// Destructing -{image , text}
function Card(props){
    return(
        <div className='single_category'>
                <img src={props.image} alt={props.text}></img>
                <p>{props.text}</p>
        </div>
    );
}

export default Card;