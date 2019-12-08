import React from "react";
import logo from "./assets/rebel_alliance_logo.png";
import "./App.css";
import { ListCharacters } from "./list-characters";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Star Wars
      </header>
      <div>
        Characters: <ListCharacters />
      </div>
    </div>
  );
}

export default App;
