import React, {useState, useEffect} from 'react';
import './style.scss';
import Hikelist from './Hikelist';
import hikingDog from '../assets/pexels-spencer-gurley-films-1448055.jpg';

const Home = () => {
    const [state, setState] = useState([1,2,3,4,5]);
       
    
    const alertClick = () =>{
        console.log("this button works when clicked");
        alert("you clicked me!")
    };
    
    const buttons = state.map( (el,idx) => 
        <button
        key={idx}
        className="navButton"
        onClick={alertClick}
        size="lg">
            Nav Button
        </button>
        
    );
    return (
        <div
        className="container"
        // style={{backgroundImage:`url(${hikingDog})`,backgroundSize:"contain",backgroundRepeat:"no-repeat"}}
        >
            <nav className="nav">{buttons}</nav>
            <div className="header">
                <h1>
                    Generic Hiking Tracker App | Homepage
                </h1>
                
            </div>    
        <p>User login</p>
        <input></input>
        <br></br><br></br>
        <button >I'm a button!</button>
        <img  src={hikingDog} alt="" width={250} height={350}/>

        
        <hr></hr>
        {/* <Hikelist/> */}
        </div>
    )
};

export default Home;