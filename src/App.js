import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navbar/>            
        </div>
        <div className="header">
          Stuff after navbar
        </div>
      </div>
    );
  }
}

export default App;
