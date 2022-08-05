import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MoviesList from "../Components/Movies/MoviesList";

//compoentes
import Navbar from "../Components/Navbar/Navbar";
import GetMovies from "../Hooks/GetMovies";

//dummy data
import { DummyData } from "../DummyData";

const Movies = () => {
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("thor");

  const [inputError, setInputError] = useState("");

  const [movies] = GetMovies(
    "http://www.omdbapi.com/?i=tt3896198&apikey=c8cb9cb0",
    [],
    title
  );

  const onSubmit = (e) => {
    e.preventDefault();

    if (search == "") {
      setInputError("Pleace enter a correct movie!");
    } else {
      setSearch("");
      setTitle(search);
      setInputError("");
    }
  };

  console.log(movies)

  return (
    <div>
      <Container>
        <form
          onSubmit={onSubmit}
          className="d-flex justify-content-center my-5 form__movies"
        >
          <input
            value={search}
            type="text"
            placeholder="Search for movies..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>{DummyData.searchButton.title}</button>
        </form>

        <p className="text-center err__msg lead">{inputError}</p>

        <Row className="d-flex justify-content-center">
          {movies != "" ? (
            <>
              {movies?.map((movie) => (
                <Col md={3} key={movie.imdbID}>
                  <MoviesList {...movie} />
                </Col>
              ))}
            </>
          ) : (
            <h1>No movies found</h1>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
