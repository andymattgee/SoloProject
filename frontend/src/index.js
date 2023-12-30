import React from 'react';
import  ReactDOM  from 'react';
import App from './components/App.jsx';
import { createRoot } from 'react-dom/client';

// ReactDOM.render(<App />, document.getElementById('root'));

const root = createRoot(document.getElementById('root'));
root.render(<App />);