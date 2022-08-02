import React from "react";
import { Link } from "react-router-dom";

//botrstrap
import { Container, Row, Col } from "react-bootstrap";

//dummy data
import { DummyData } from "../DummyData";

//imgs
import error__img from "../img/error_img.png";
import Navbar from "../Components/Navbar/Navbar";

const Error = () => {
  return (
    <>
      <Navbar />
      <div className="error__section ">
        <Container className="">
          <Row className="d-flex justify-content-center">
            <Col md={6}>
              <img src={error__img} className="img-fluid " />
            </Col>
            <Col md={6} className="error__text">
              <h1 className="mb-3">
                {DummyData.h1Error.title}
                <span className="pink">:(</span>
              </h1>
              <p>{DummyData.pError.title}</p>
              <button className="error__btn">
                <Link to="/">{DummyData.buttonTexts.title}</Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Error;
