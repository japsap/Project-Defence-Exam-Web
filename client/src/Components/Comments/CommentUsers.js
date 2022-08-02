import React from "react";
import { Link } from "react-router-dom";

const CommentUsers = ({ user, comment }) => {

 const {
  title
 } = comment
  
const { email, photoURL } = user
  return (
    <div>
      <div className="d-flex">
        <img
          className="rounded-circle comment-img"
          src={
            photoURL == null
              ? "https://cdn4.vectorstock.com/i/thumb-large/62/38/avatar-13-vector-42526238.jpg"
              : photoURL
          }
        />
        <div className="flex-grow-1 ms-3">
          <div className="mb-1">
            <Link
              to="/dashboard"
              className="fw-bold link-dark pe-1"
              style={{ textDecoration: "none" }}
            >
              {email ? email : "Unknown"}
            </Link>
            <span className="text-muted text-nowrap">now</span>
          </div>
          <div className="mb-2">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentUsers;
