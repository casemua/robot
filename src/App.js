import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CanvasTable from "./CanvasTable";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Robot Coding Test</h1>
        </header>
        <div className="canvasTable">
          <CanvasTable />
        </div>
      </div>
    );
  }
}

export default App;
