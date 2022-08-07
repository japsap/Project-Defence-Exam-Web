import React, { useState } from "react";
import { Link } from "react-router-dom";

//botrstrap
import { Button, Card } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

//firebase
import { DummyData } from "../../DummyData";

//custom hook
import { getAuth } from "firebase/auth";

//icons
import { FcDeleteDatabase } from "react-icons/fc";

const MovieBuyList = ({ _id, title, text, img, deleteTask }) => {
  const { currentUser } = getAuth();

  const subText = text.substring(0, 50);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card
        style={{ width: "auto", height: "30rem" }}
        className="m-2 layButton"
      >
        <Card.Img variant="top" className="movies__list__img" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <p>{`${subText}...`}</p>
        </Card.Body>
        <div className="movies__btn justify-content-around">
          {currentUser ? (
            <>
              <FcDeleteDatabase
                className="delte__btn mb-2"
                onClick={
                  //if(window.confirm(`Are you sure you want to delete this movie card: ${title}`))
                  //deleteTask(_id);
                  handleShow
                }
              >
                Delete
              </FcDeleteDatabase>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Movie Card Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Are you sure you want to delete the movie card post?<br></br>
                  Name : <span style={{fontWeight:'bold'}}>{title}</span>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary btn-primary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary btn-danger" onClick={() => {
                    deleteTask(_id);
                  }}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          ) : (
            ""
          )}
          <button className="LearnMore__game">
            <Link to={`${_id}`}>{DummyData.buttonTexts.title}</Link>
          </button>
        </div>
      </Card>
    </div>
  );
};

export default MovieBuyList;
