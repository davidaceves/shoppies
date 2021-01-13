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

const Poster = styled.img`
  width: 50%;
  border: 1px solid black;
`;

const Movie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
  width: 20%;
  border: 1px solid black;
  background-color: rgb(102, 102, 104);
  padding: 2%;
  margin: 1%;
`;

const MovieTitle = styled.h3`
  color: gold;
`;

function Results(props) {
  const [movies, setMovies] = useState([]);
  const [nominate, setNominate] = useState([]);

  useEffect(
    () => {
      // if (movies.length >= 5) {
      //   movies.shift();
      // }

      // for (let i = 0; i < movies.length; i++) {
      //   if (movies[i].Title === props.movie.Title) {
      //     return alert("Already searched");
      //   }
      // }
      console.log(props.movie);
      // if (props.movie.length !== 0) {
      //   for (let i = 0; i < props.movie["Search"].length; i++) {
      //     setMovies((movies[i] = props.movie["Search"][i]));
      //     console.log("hello", movies[i].Title, movies[i].Year);
      //   }
      // }
    },
    [props.movie],
    [movies]
  );

  const nominateMovie = () => {
    if (nominate.length > 4) {
      return alert("Too many movies!");
    } else {
      setNominate(nominate.concat(props.movie));
    }
  };

  const clearMovies = () => {
    setMovies([]);
  };

  return (
    <Container>
      {/* <div className="results">
        {movies ? (
          movies.map((movie) => {
            return (
              <Movie key={movie.imdbID}>
                <MovieTitle>{movie.Title}</MovieTitle>
                <p>{movie.Year}</p>
                <p>{movie.Plot}</p>
                <Poster src={movie.Poster} alt="Poster" />
                <button onClick={nominateMovie}>Nominate</button>
              </Movie>
            );
          })
        ) : (
          <p>"Loading"</p>
        )}
      </div> */}
      <button onClick={clearMovies}>Clear</button>
    </Container>
  );
}

export default Results;
