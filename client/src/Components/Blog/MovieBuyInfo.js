import React, { useState } from "react";
import { useParams } from "react-router";

import { Container } from "react-bootstrap";

import useFetchId from "../../Hooks/useFetchId";
import { DummyData } from "../../DummyData";

const MovieBuyInfo = ({ handleChange, message }) => {
    const { movesInfoId } = useParams();

    const [ dontUseThis, b ] = useFetchId('http://localhost:5050/jsonstore/blogs', [], movesInfoId)

    const {
      title,
      price,
      text,
      img
    } = b
    
  return (
    <div>
      <header
        className="header__moviesInfo"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
        }}
      />
      <Container className="mt-5">
        <div className="d-flex">
          <h1 className="mb-5 underline">{title}</h1>
          <p className="movie__price">{`$${price}`}</p>
        </div>

        <p>{text}</p>


        <button className="Buy__btn__info" onClick={() => handleChange(b)}>{DummyData.buttonBuy.title}</button>


        <p>{message}</p>
      </Container>
    </div>
  );
};

export default MovieBuyInfo;
