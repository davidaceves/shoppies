import React, { useState, useEffect } from "react";
import "../App.css";

function Results(props) {
  const [movies, setMovies] = useState();

  useEffect(() => {
    setMovies(props.movies);
  }, [props.movies]);

  return (
    <div className="results">
      {movies ? console.log(movies.Title) : <p>"Loading"</p>}
    </div>
  );
}

export default Results;
