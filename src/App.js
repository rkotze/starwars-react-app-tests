import React from "react";
import logo from "./assets/rebel_alliance_logo.png";
import "./App.css";
import { CharacterDetails } from "./character-details";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Star Wars
      </header>
      <CharacterDetails />
    </div>
  );
}

export default App;
