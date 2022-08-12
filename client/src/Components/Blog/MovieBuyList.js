import React, { useState } from "react";
import { Link } from "react-router-dom";

//botrstrap
import { Button, Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

//custom hook
import { getAuth } from "firebase/auth";

//icons
import { FcDeleteDatabase, FcAbout } from "react-icons/fc";
import { useNavigate } from "react-router";



const MovieBuyList = ({ _id, title, text, img, deleteTask }) => {
  const { currentUser } = getAuth();

  const subText = text.substring(0, 50);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  return (
    <div>
      <div  className="imageMovies">
        <Card
          className="bg-dark mb-5"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 3.7)), url(${img})`,
            border: "none",
            height: "30vh",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            userSelect: "none",
            cursor: "pointer",
          }}
        >
          <Card.ImgOverlay className="card__overlay">
            <Card.Title>{title}</Card.Title>
            <p>{`${subText}...`}</p>
            {currentUser ? (
          <>
          <div className="d-flex">
            <FcDeleteDatabase
              className="delte__btn mb-2"
              onClick={
                handleShow
              }
            >
              Delete
            </FcDeleteDatabase>

              <Link to={`${_id}`}>
                <FcAbout className="delte__btn mx-2"/>
              </Link>
          </div>
           
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Movie Card Delete</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are you sure you want to delete the movie card post?<br></br>
                Name : <span style={{ fontWeight: "bold" }}>{title}</span>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary btn-primary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="primary btn-danger"
                  onClick={() => {
                    deleteTask(_id);
                  }}
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        ) : (
          ""
        )}
          </Card.ImgOverlay>
        </Card>
      </div>
      <div>
      </div>
    </div>
  );
};

export default MovieBuyList;
