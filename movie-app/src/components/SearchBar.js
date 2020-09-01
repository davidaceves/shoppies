import React, { useState } from "react";
import axios from "axios";

import "../App.css";
import Results from "./Results";

function SearchBar() {
  const [input, setInput] = useState();
  const [movies, setMovies] = useState();

  const movieSearch = () => {
    axios
      .post(`http://www.omdbapi.com/?i=tt3896198&apikey=619b8e93&t=${input}`)
      .then((res) => setMovies(res.data));
  };

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="searchBar">
      <p>Movie Title</p>
      <input
        type="text"
        name="search"
        placeholder="Enter a movie title..."
        value={input}
        onChange={inputHandler}
      ></input>
      <button onClick={movieSearch}>Search</button>
      <Results movies={movies} />
    </div>
  );
}

export default SearchBar;
