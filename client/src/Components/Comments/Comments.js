import React, { useState } from "react";
import { Link } from "react-router-dom";


import useCommentRest from "../../Hooks/useCommentRest";
import useFetchComments from '../../Hooks/useFetchComments';

import CommentUsers from "./CommentUsers";

const Comments = ({ user }) => {

  const { email, photoURL } = user;

  //useStates hooks
  const [ comment , setComment] = useState("");
  const [ error, setError ] = useState("");


  //fetching the comments
  const { postComment } = useCommentRest();
  const [ commentsUser ] = useFetchComments(`http://localhost:5050/jsonstore/comment`, [])

  
  //submiting the comments + error handlers
  const onSubmit = (e) => {
    e.preventDefault();

    if(comment == '' || comment.length < 12) {
      setError('Enter a valid comment!')

    } else {
      postComment(comment);
      setComment('')
      window.location.reload();
      setError('')
    }
  }


  return (
    <div className="app container py-4">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 col-lg-8 m-auto">
          <div className="bg-white rounded-3 shadow-sm p-4 mb-4">
            {/* New Comment */}
            <div className="d-flex">
              <img
                className="rounded-circle me-3"
                style={{ width: "3rem", height: "3rem" }}
                src={
                  photoURL == null
                    ? "https://cdn4.vectorstock.com/i/thumb-large/62/38/avatar-13-vector-42526238.jpg"
                    : photoURL
                }
              />
              <div className="flex-grow-1">
                {/* avatar */}
                <div className="hstack gap-2 mb-1">
                  <Link to="/dashboard" style={{ textDecoration: "none" }}>
                    <p>{user ? email : "Unknown"}</p>
                  </Link>
                </div>
                {/* avatar */}

                {/* input form */}
                <form onSubmit={onSubmit} className="form-floating mb-3">
                  <textarea
                    className="form-control w-100"
                    placeholder="Leave a comment here...."
                    id="my-comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    style={{ height: "8rem", width: "200px" }}
                  />
                  <label htmlFor="my-comment">Leave a comment here...</label>

                  <div className="hstack justify-content-end gap-2 mb-5 mt-5">
                  <button className="text-uppercase comment__btn">
                    Comment
                  </button>
                </div>
                </form>
                <p className="text-right err__msg">{error}</p>
                {/* input form */}



                {/* commentari */}

                {commentsUser.map((comment, i) => (
                  <div className="mb-5" key={i}>
                    <CommentUsers comment={comment} user={user} />
                  </div>
                ))}

                {/* commentari */}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3 shadow-sm p-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
