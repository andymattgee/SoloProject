import React from 'react';

const App = () => {
    const alertClick = () =>{
        console.log("this button works when clicked");
        alert("you clicked me!")
    }
    return (
        <div>
        <h1> Hello World! how the hell are ya? this is being rendered from App component</h1>
        <p>User login</p>
        <input></input>
        <button onClick={alertClick}>Click Me!</button>
        </div>
    )
};

export default App;