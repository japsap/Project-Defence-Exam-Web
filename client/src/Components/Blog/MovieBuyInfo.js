import React from "react";
import { useParams } from "react-router";

import { Container } from "react-bootstrap";

import useFetchId from "../../Hooks/useFetchId";
import { DummyData } from "../../DummyData";

const MovieBuyInfo = () => {
    const { movesInfoId } = useParams();

    const [ bloga, b ] = useFetchId('http://localhost:5050/jsonstore/blogs', [], movesInfoId)

    console.log(b)
  return (
    <div>
      <header
        className="header__moviesInfo"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${b.img})`,
        }}
      />
      <Container className="mt-5">
        <div className="d-flex">
          <h1 className="mb-5 underline">{b.title}</h1>
          <p className="movie__price">{`$${b.price}`}</p>
        </div>

        <p>{b.text}</p>


        <button className="Buy__btn__info">{DummyData.buttonBuy.title}</button>
      </Container>
    </div>
  );
};

export default MovieBuyInfo;
