import React from 'react';
import './Exercisedashboard.css';
const Exercisedashboard = ({value,handleAddToCart}) => {
    const {name,url,time,price}=value;
   // const {name}=props;
    return (
        <div className='dashboardEx'>
            
            <img src={url} alt=""></img>
            
            <div className='productInfo'>
                <h2>{name}</h2>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                <p>price: ${price}</p>
                <p>Time: {time}s</p>
            </div>
            
            <button  onClick={() => handleAddToCart(value)} className='btn-cart'>
                <p className='btn-text'>Add to List</p>
            </button>
            
        </div>
    );
};

export default Exercisedashboard;