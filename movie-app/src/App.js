import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Film Finder</h1>
      </header>
      <Navigation />
      <SearchBar />
    </div>
  );
}

export default App;
