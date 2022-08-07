//react comps
import React, { useState, useEffect } from "react";

//firebase funcs
import { getAuth } from "firebase/auth";
import { uploadPicture, uploadUsername } from "../../Hooks/fire";

//icons
import { AiOutlineClose, AiOutlineMore } from "react-icons/ai";

//botrstrap
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

const UserUpdate = ({ handleSignout }) => {
  //ustestate constants
  const { currentUser } = getAuth();
  const [photo, setPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(
    "https://cdn4.vectorstock.com/i/thumb-large/62/38/avatar-13-vector-42526238.jpg"
  );
  const [name, setName] = useState("");

  const [error, setError] = useState("");

  //modal states
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //set the state to the value of the given picture in the input
  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  //change pfp
  function handleChanePicture(e) {
    e.preventDefault();
    if (photo == "") {
      alert("Please enter a correct profile data!");
    } else {
      uploadPicture(photo, currentUser);
    }
  }

  //change username
  const handleChangeUsername = (e) => {
    e.preventDefault();

    if (name == "") {
      setError("You must put a correct username!");
    } else if (name.length <= 5) {
      setError("Your username must unclude 6 or more characters!");
    } else {
      uploadUsername(currentUser, name);
    }
  };

  //when the pages load but the picture the firebase has
  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoUrl(currentUser.photoURL);
    }
  }, [currentUser]);

  const bold = {
    fontWeight:'bold'
  }

  const {
    email,
    displayName
  } = currentUser

  return (
    <div className="d-flex justify-content-center">
      <div className="updateUser__form">
        <AiOutlineMore className="mb-3 learnMore" onClick={handleShow} />

        {/* modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title><span style={bold}>{displayName == null ? 'Uknown' : displayName}'s</span> Account Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Username: <span style={bold}>{displayName == null ? 'Uknown' : displayName }</span></p>
            <p>Email: <span style={bold}>{email}</span></p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary btn-primary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary btn-danger" onClick={handleSignout}>
              Log Out
            </Button>
          </Modal.Footer>
        </Modal>
        {/* modal */}

        <h1 className="text-center underline">Update Profile</h1>

        <img
          className="mx-auto d-block mt-5"
          style={{
            borderRadius: "50%",
            height: "200px",
            width: "200px",
            objectFit: "cover",
          }}
          src={photoUrl}
        />

        {/* update picture */}
        <div className="logIn__group mt-5">
          <input
            className="logIn__input"
            accept="image/*"
            type="file"
            required
            onChange={handleChange}
          />
        </div>

        {/* optional button for updatin the users pfp */}
        {photo == null ? (
          ""
        ) : (
          <button
            className="btns__update updatePfp mb-4"
            onClick={handleChanePicture}
          >
            Update Picture
          </button>
        )}
        {/* optional button for updatin the users pfp */}

        {/* update pciture */}

        <div className="logIn__group">
          <input
            className="logIn__input"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="logIn__highlight"></span>
          <span className="logIn__bar"></span>
          <label className="logIn__label">Name</label>
        </div>

        <p className="err__msg">{error}</p>

        {/* optional button for updatin the users name */}
        {name == "" ? (
          ""
        ) : (
          <button
            className="btns__update updateUsername"
            onClick={handleChangeUsername}
          >
            Update Username
          </button>
        )}
        {/* optional button for updatin the users name */}
      </div>
    </div>
  );
};

export default UserUpdate;
