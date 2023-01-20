import React from 'react';
import Card from './Card.js';
import './CategoriesList.css';

const CategoriesDetails = [
    {
        id : 1,
        image : "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" ,
        text : "Grocery"
    },
    {
        id : 2,
        image : "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"  ,
        text : "Mobiles"
    },
    {
        id : 3,
        image : "https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"  ,
        text : "Fashion"
    },
    {
        id : 4,
        image : "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"  ,
            text : "Electronics"
    },
    {
        id : 5,
        image : "https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" ,
        text : "Home"
    },
    {
        id : 6,
        image : "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"  ,
        text : "Appliances"
    },
    {
        id : 7,
        image : "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"  ,
        text : "Travel"
    },
    {
        id : 8,
        image : "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"  ,
        text : "Top offers"
    },
    {
        id : 9,
        image : "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"  ,
        text : "Beauty,Toys & More"
    },
    {
        id : 10,
        image : "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100" ,
        text : "Two Whellers"
    }
]

function CategoriesList(){
    return(
        <div className='categories_list'>
            {/* Properties - props*/}
            {CategoriesDetails.map((value) => (
                <Card image={value.image} 
                text = {value.text}/>
            ))}
            
             
            
        </div>
    );
}
export default CategoriesList;