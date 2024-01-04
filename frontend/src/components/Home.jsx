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
                    Generic Hiking Tracker App | Homepage
                </h1>
                
            </div>   
            <div><h3 style={{textAlign:'center'}}>User lands here and has list of hikes displayed</h3></div> 
        
        <br></br>
        <Hikelist/>

        <hr></hr>
        <img  src={hikingDog} alt="" width={250} height={350} style={{position: 'absolute', left: '45%', 
        }}/>

        </div>
    )
};

export default Home;