import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Container } from "react-bootstrap";


import useCommentRest from "../../Hooks/useCommentRest";



const MoviePoster = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [error, setError ] = useState('');

  const navigate = useNavigate();

  const { postBlog } = useCommentRest()

  const onSubmit = (e) => {
    e.preventDefault()
    if(title == '' || text == ''){
      setError('Please enter a corret blog data!')
    } else {
      postBlog(title, text, img)
      setError('')
      setText('')
      setTitle('')
      setImg('')
      alert('blog posted')
      navigate('/blogs')
    }
  }

  
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
    <div className="blog__poster d-flex justify-content-center">
      <Container>
        <h2 className="text-center underline-container">
          Post a movie Buy Card
        </h2>



        <form className="blog__form" onSubmit={onSubmit}>
          <div className="logIn__group">
            <input
              className="logIn__input"
              type="file"
              required
              onChange={(e) => uploadImage(e)}
            />
          </div>

          <div className="logIn__group">
            <input
              className="logIn__input"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className="logIn__highlight"></span>
            <span className="logIn__bar"></span>
            <label className="logIn__label">Title</label>
          </div>

          <div className="logIn__group">
            <input
              className="logIn__input"
              type="text"
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <span className="logIn__highlight"></span>
            <span className="logIn__bar"></span>
            <label className="logIn__label">Text</label>
          </div>

          <p className="err__msg mt-3">{error}</p>

          <button className="blog__post__btn">Post Blog</button>
        </form>
      </Container>
    </div>
  );
};

export default MoviePoster;
