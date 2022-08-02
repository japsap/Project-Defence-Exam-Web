import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MoviesList from "../Components/Movies/MoviesList";


//compoentes
import Navbar from "../Components/Navbar/Navbar";
import GetMovies from "../Hooks/GetMovies";

//dummy data


const Movies = () => {
  const [ search, setSearch ] = useState('');
  const [ title, setTitle] = useState('spiderman')
  const [movies, setMovies] = GetMovies(
    "http://www.omdbapi.com/?i=tt3896198&apikey=c8cb9cb0",
    [],
    title
  );

  return (
    <div>
      <Navbar />
      <Container>
        <form>
        <input
          value={search}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* <button>{DummyData}</button> */}
        </form>
        <Row className="d-flex justify-content-center">
          {movies.map((movie) => (
            <Col md={3} key={movie.imdbID} >
              <MoviesList {...movie}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
