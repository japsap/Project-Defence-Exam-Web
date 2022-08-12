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
import Error from "../Components/Error";

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

  const [inputError, setInputError] = useState(false);

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

    if (search.length <= 2) {
      setInputError(true);

    } else {
      setSearch("");
      setTitle(search);
      setInputError(false);
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

        {inputError && <Error inputError={inputError} setInputError={setInputError}/>}


        
        <Row className="d-flex justify-content-center ">
        <h3 className="mb-4">Recomended for you: <strong>{titleTwo}</strong></h3>
         
            <Swiper
            style={{
              "--swiper-pagination-color": "#e11665",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "8px",
              "--swiper-pagination-bullet-horizontal-gap": "6px"
            }}
              slidesPerView={3}
              spaceBetween={20}
              pagination={true}
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
        </Row>


        <h3 className="my-5">Your searches: <strong>{title}</strong></h3>
        <Row className="d-flex justify-content-center ">
          {movies != null ? (
            <>
              {movies?.map((movie) => (
                <Col md={3} key={movie.imdbID}>
                  <MoviesList {...movie} />
                </Col>
              ))}
            </>
          ) : (
            <h3>No movies matched your search: <strong>{title}</strong></h3>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
