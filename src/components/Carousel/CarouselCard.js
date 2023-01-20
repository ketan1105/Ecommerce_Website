import React from 'react';
import './CarouselCard.css';

function CarouselCard(props){
    return(
        /*{<div>
    {left arrow}  

      {carouselData.map((value) => (
        <img className="carousel_images" src={value.image} />
      ))}

       {right arrow}  
      </div>}*/


        <img className = "carousel_images"  src={props.image} alt={props.name}/>
    );
}

export default CarouselCard;