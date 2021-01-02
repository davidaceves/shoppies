import React, { useState, useEffect } from "react";
import "../App.css";

function Results(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length > 5) {
      movies.shift();
    }
    setMovies(movies.concat(props.movie));
  }, [props.movie]);

  const clearMovies = () => {
    setMovies([]);
  };

  return (
    <div className="results">
      {movies ? (
        movies.map((movie) => {
          return (
            <div>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt="Poster" />
            </div>
          );
        })
      ) : (
        <p>"Loading"</p>
      )}
      <button onClick={clearMovies}>Clear</button>
    </div>
  );
}

export default Results;
