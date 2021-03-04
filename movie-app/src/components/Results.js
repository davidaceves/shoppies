import React, { useState, useEffect } from "react";
import "../App.css";

import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
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
  flex-direction: row;
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

  useEffect(() => {
    if (props.movie.Response === "True") {
      for (let i = 0; i < props.movie["Search"].length; i++) {
        setMovies(props.movie["Search"]);
      }
    }
  }, [props.movie]);

  const nominateMovie = () => {
    if (nominate.length > 4) {
      return alert("Too many movies!");
    } else {
      setNominate(nominate.concat(props.movie));
    }
  };

  return (
    <Container>
      <div className="results">
        {movies ? (
          Object.keys(movies).map((key) => {
            return (
              <Movie key={movies[key].imdbID}>
                <MovieTitle>{movies[key].Title}</MovieTitle>
                <p>{movies[key].Year}</p>
                <Poster src={movies[key].Poster} alt="Poster" />
                <button onClick={nominateMovie}>Nominate</button>
              </Movie>
            );
          })
        ) : (
          <p>"Loading"</p>
        )}
      </div>
    </Container>
  );
}

export default Results;
