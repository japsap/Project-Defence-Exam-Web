import React from "react";
import { Link } from "react-router-dom";

//botrstrap
import { Button, Card } from "react-bootstrap";

//firebase
import { DummyData } from "../../DummyData";

//custom hook
import { getAuth } from "firebase/auth";

//icons
import { FcDeleteDatabase, FcAbout } from "react-icons/fc";
import { MdOutlineAddShoppingCart } from 'react-icons/md';

const MovieBuyList = ({ _id, title, text, img, deleteTask }) => {
  const { currentUser } = getAuth();

  const subText = text.substring(0, 50);

  return (
    <div>
      <Card style={{ width: "20rem", height: "30rem" }} className="m-2">
        <Card.Img variant="top" className="movies__list__img" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <p>{`${subText}...`}</p>
        </Card.Body>
        <div className="movies__btn justify-content-around">
          {currentUser ? (
            <FcDeleteDatabase
              className="delte__btn mb-2"
              onClick={() => {
                deleteTask(_id);
              }}
            >
              Delete 
            </FcDeleteDatabase>
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
