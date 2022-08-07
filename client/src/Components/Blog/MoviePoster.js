import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Container, Row, Col } from "react-bootstrap";

import useCommentRest from "../../Hooks/useCommentRest";

const MoviePoster = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [qty, setQty] = useState(1);

  const navigate = useNavigate();

  const { postBlog } = useCommentRest();

  const onSubmit = () => {
    if (title == "" || text == "") {
      setError("Please enter a corret blog data!");
    } else {
      if(window.confirm("Are you sure you want to post the movie for sale?")){
        postBlog(title, text, img, price, qty);

        setError("");
        setText("");
        setTitle("");
        setImg("");
        setPrice("");
  
  
        navigate("/moviesBuy");
      }
    }
  };


  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setImg(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="blog__poster ">
      <header
        className="header__moviesInfo mb-3"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
        }}
      />
      <Container>
        <div className="blog__form">
          <input
            className="moviePost__input"
            type="file"
            required
            onChange={(e) => uploadImage(e)}
          />

          <input
            className="moviePost__input__title"
            type="text"
            required
            value={title}
            placeholder="Movie title..."
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="moviePost__textarea"
            type="text"
            placeholder="Movie Information..."
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <input
            className="price__input"
            type="number"
            value={price}
            placeholder="Set a Price..."
            onChange={(e) => setPrice(e.target.value)}
          />

          <p className="err__msg mt-3">{error}</p>

          <button className="blog__post__btn" onClick={onSubmit}>Post It</button>

          
        </div>
      </Container>
    </div>
  );
};

export default MoviePoster;
