import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heroes from './Components/Heroes';

class App extends Component {


  render() {
    return (
      <div className="App">
       <h1> Heros </h1>
       <div className="header-bar"/>
       <Heroes />
      </div>
    );
  }
}

export default App;
