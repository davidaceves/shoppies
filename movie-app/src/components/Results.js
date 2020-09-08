import React, { useState, useEffect } from "react";
import "../App.css";

function Results(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length > 5) {
      movies.shift();
    }
    setMovies(movies.concat(props.movieTitle));
  }, [props.movieTitle]);

  const clearMovies = () => {
    setMovies([]);
  };

  return (
    <div className="results">
      {movies ? (
        movies.map((movie) => {
          return <p>{movie}</p>;
        })
      ) : (
        <p>"Loading"</p>
      )}
      <button onClick={clearMovies}>Clear</button>
    </div>
  );
}

export default Results;
