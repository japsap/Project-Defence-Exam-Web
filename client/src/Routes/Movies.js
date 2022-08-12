//react
import React, { useState } from "react";

//boostrap
import { Container, Row, Col } from "react-bootstrap";

//compoentes
import GetMovies from "../Hooks/GetMovies";
import MoviesList from "../Components/Movies/MoviesList";

//icons
import { AiOutlineSearch } from "react-icons/ai";

//swipers
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const titles = [
  "Spiderman",
  "Minions",
  "Avengers",
  "Ninja Turtles",
  "Thor",
  "Batman",
  "Pirates",
  "game of thrones",
  "jurassic world",
  "the godfather",
  "need for speed",
];

const randomTitle = () => {
  return titles[Math.floor(Math.random() * titles.length)];
};

const Movies = () => {
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState(randomTitle());
  const [titleTwo, setTitleTwo] = useState(randomTitle());

  const [inputError, setInputError] = useState("");

  //fetching movies for the swipper
  const [movies] = GetMovies(
    "http://www.omdbapi.com/?i=tt3896198&apikey=c8cb9cb0",
    [],
    title
  );

  //fetching movies for the swipper for the actuall show same url different movie Titles
  const [moviess] = GetMovies(
    "http://www.omdbapi.com/?i=tt3896198&apikey=c8cb9cb0",
    [],
    titleTwo
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

  return (
    <div>
      <Container>
        <form
          onSubmit={onSubmit}
          className="d-flex justify-content-center my-5 form__movies"
        >
          <div className="cool__submit">
            <input
              value={search}
              type="text"
              placeholder="Search for movies..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="search__btn">
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>

        <p className="text-center err__msg lead">{inputError}</p>


        
        <Row className="d-flex justify-content-center ">
        <h3 className="mb-4">Recomended for you: {titleTwo}</h3>
          {moviess != "" ? (
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              showspagination="true"
              autoplay={{
                delay: 2500,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {moviess?.map((movie) => (
                 <SwiperSlide>
                    <Col md={30} key={movie.imdbID} >
                      <MoviesList {...movie} />
                    </Col>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <h1>No movies found</h1>
          )}
        </Row>


        <h3 className="my-5">Recomended for you: {title}</h3>
        <Row className="d-flex justify-content-center ">
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
