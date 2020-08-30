import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import Nominations from "./components/Nominations";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Shoppies</h1>
      </header>
      <SearchBar />
      <div className="content">
        <Results />
        <Nominations />
      </div>
    </div>
  );
}

export default App;
