import React, {useState, useEffect} from 'react';
import './style.scss';
import Hikelist from './Hikelist';
import hikingDog from '../assets/pexels-spencer-gurley-films-1448055.jpg';


const Home = () => {
    
    
    
    return (
        <div
        className="container"
        >
            <div className="header">
                <h1>
                    Trail Tracker
                </h1>
                
            </div>   
            
        
        <br></br>
        <Hikelist/>

        {/* <hr></hr> */}
        {/* <img  src={hikingDog} alt="" width={250} height={350} style={{position: 'absolute', left: '45%',  */}
        {/* }}/> */}

        </div>
    )
};

export default Home;