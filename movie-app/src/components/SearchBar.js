import React, { useState, useEffect } from "react";
import axios from "axios";

import "../App.css";
import Results from "./Results";

function SearchBar() {
  const [input, setInput] = useState({});
  const [movies, setMovies] = useState([]);

  const movieSearch = () => {
    axios
      .post(
        `http://www.omdbapi.com/?i=tt3896198&apikey=619b8e93&s=${input.search}`
      )
      .then((res) => setMovies(res.data));
  };

  const inputHandler = (e) => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  // useEffect(() => {
  //   if (input.search !== undefined) {
  //     movieSearch();
  //   }
  // }, [input.search]);

  return (
    <>
      <div className="searchBar">
        <p>Movie Title</p>
        <input
          type="text"
          name="search"
          placeholder="Enter a movie title..."
          onChange={inputHandler}
        ></input>
        <button onClick={movieSearch}>Search</button>
      </div>
      <div class="content">
        <Results movie={movies} />
      </div>
    </>
  );
}

export default SearchBar;
