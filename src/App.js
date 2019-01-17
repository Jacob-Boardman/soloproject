import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navbar />
        </div>
        <div className="header">
          <h1>Game Matching Database</h1>
        </div>
        <div className="userLogin">
          <form action="onSubmit">
            <input type="text" placeholder="Account Name..."/>
            <input type="password" placeholder="Password..."/>
            <input type="submit" value="Sumbit"/>
          </form>
          </div>
      </div>
    );
  }
}

export default App;
