import React from 'react';
import './App.css';
import Routes from './components/routes.js';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router> <Routes /></Router>
    </div>
  );
}

export default App;
