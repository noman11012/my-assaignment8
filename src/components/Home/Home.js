import React, { useEffect, useState } from 'react';
import Evaluation from '../Evaluation/Evaluation';
import Exercisedashboard from '../Exercisedashboard/Exercisedashboard';
import './Home.css';

const Home = () => {
    const [value, setValue]=useState([]);
    const [timeValue, setTimeValue]=useState(0);
    useEffect(()=>{
        fetch('generatedd.json')
      .then(response => response.json())
      .then(json => setValue(json))
    },[])

    let Totaltime=0;
    const handleAddToCart=(countTime)=>{
        setTimeValue(parseInt(timeValue)+parseInt(countTime.time))
    }
    
    return (
        <div className='home'>
            <div className='dashboard'>
               
                {
                    value.map(value=><Exercisedashboard 
                     value={value}
                     key={value.id}
                     handleAddToCart={handleAddToCart}
                     ></Exercisedashboard>)
                }
            </div>
            <div className='evaluation'>
                
                <Evaluation totaltime={timeValue}></Evaluation>
            </div>
        </div>
    );
};

export default Home;