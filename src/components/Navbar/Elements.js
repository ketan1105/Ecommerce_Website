import React from 'react';
import './Elements.css';

function Elements(props){
    return(
        <div className='navbar_right'>
          <p>{props.text}</p>
        </div>
    );
}

export default Elements;