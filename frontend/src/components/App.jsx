import React, {useState, useEffect} from 'react';
import TestComponent from './Testing.jsx';
import './style.css';

const App = () => {
    const [state, setState] = useState([1,2,3,4,5]);
    const [color, setColor] = useState(true)
    
    
    const alertClick = () =>{
        console.log("this button works when clicked");
        alert("you clicked me!")
    };
    const backgroundChanger = () =>{
        color ? setColor(false) : setColor(true);
    };
    const buttons = state.map( (el,idx) => 
        <button
        onClick={alertClick}>
            {el}
        </button>
        
    );
    return (
        <div
        style={{backgroundColor : color === true ? 'lavender' : 'cyan'}}>
            
        <p>User login</p>
        <input></input>
        <br></br><br></br>
        <button onClick={backgroundChanger} style={{backgroundColor:'yellow'}}>Click Me to change the background!</button>
        <br></br><br></br>
        {buttons}
        <hr></hr>
        < TestComponent />
        </div>
    )
};

export default App;