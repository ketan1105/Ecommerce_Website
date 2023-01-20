import React from 'react';
import './Cards.css';

function Cards(props){
    return(
        <div className='single_Product'>
            <img src={props.image} />
            <p id='title'>{props.title}</p>
            <p id = 'price'>{props.price}</p>
        </div>
    );
}

export default Cards;