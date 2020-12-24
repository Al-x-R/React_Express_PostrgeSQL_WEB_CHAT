import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Routes from './router';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes/>
      </Router>

    </div>
  );
}

export default App;
