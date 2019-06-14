import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppNavbar from './components/layout/AppNavbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <div className="container">
          <h3>Starter text for Client Manager React-Redux App</h3>
        </div>
      </div>
    </Router>
  );
}

export default App;
