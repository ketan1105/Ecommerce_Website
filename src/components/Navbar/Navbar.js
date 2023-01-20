import React from 'react';
import './Navbar.css';
import Elements from './Elements.js';

const Navbar = () =>{

    //Elements
    //1. logo
    //2. input field
    //3. item1
    //4. item2
    //5. item3
    //6. item4

    return(
        <div className="navbar">
            <div className='navbar_left'>
                <p>Flipkart</p>
                <input className='navbar_left_input' placeholder='Search for Products , brands and more'/>
            </div>
            <Elements 
            text = "Name"/>
            <Elements 
            text = "Become a Seller"/>
            <Elements 
            text = "More"/>
            <Elements 
            text = "Cart"/>
        </div>
    );
};

export default Navbar;
