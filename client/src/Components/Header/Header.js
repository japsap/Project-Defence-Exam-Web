import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import { getAuth } from "firebase/auth";

import { DummyData } from "../../DummyData";

//imgs
import header__img from "../../img/header.png";

const Header = () => {
  const { currentUser } = getAuth()
  return (
    <Container className="my-5">
      <Row className="d-flex justify-content-center">
        <Col md={6} className="mt-5 header__text">
          <h1 className="h1__header">
            Newest Movie<br></br> Web IS HERE
          </h1>
          <p>
            Our newly made website that cracks and posts the newest movies is
            now ONLINE You can view, download and comment on every
            movie that we post here :)
          </p>
          <div className="display__flex__header">
            <button className="header__btn  mb-2"><Link to='/movies'>{DummyData.buttonTexts.title}</Link></button>
            { currentUser ?  '' :  <button className="header__btn__2" ><Link to='/login'>{DummyData.buttonLog.title}</Link></button>}
          </div>
       
        </Col>
        <Col md={6}>
          <img src={header__img} className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
