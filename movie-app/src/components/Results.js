import React, { useState, useEffect } from "react";
import "../App.css";

import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

function Results(props) {
  const [movies, setMovies] = useState([]);
  const [nominate, setNominate] = useState([]);

  useEffect(() => {
    if (movies.length >= 5) {
      movies.shift();
    }
    setNominate(nominate.concat(props.movie), [nominate]);

    setMovies(movies.concat(props.movie));
  }, [props.movie]);

  const nominateMovie = () => {
    if (nominate.length > 5) {
      return alert("Too many movies!");
    } else {
      setNominate(nominate.concat(props.movie));
      console.log(nominate);
    }
  };

  const clearMovies = () => {
    setMovies([]);
  };

  return (
    <Container>
      <div className="results">
        {movies ? (
          movies.map((movie) => {
            return (
              <div key={movie.imdbID} className="movie">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <button onClick={nominateMovie}>Nominate</button>
              </div>
            );
          })
        ) : (
          <p>"Loading"</p>
        )}
      </div>
      <button onClick={clearMovies}>Clear</button>
    </Container>
  );
}

export default Results;
