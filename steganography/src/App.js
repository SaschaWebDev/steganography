import './App.css';
import './tailwind.output.css';
/* import('http://yourjavascript.com/01202561460/steganography-min.js') */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './views/Dashboard'

function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path='/' component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
