import React from 'react';
import  ReactDOM  from 'react';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';



// ReactDOM.createContext(document.getElementById('root')).render(
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
// )

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);