import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CommentUsers = ({ comment }) => {

 const {
  title
 } = comment


 /*

  the comment doesnt work properly because the public api that i use doesnt have a POST option and 
  i cant post to the ${url}/${moviesId}, and thats why underneath each single one rendered movie i 
  cant have unique comments and for each comment i cant have a unique id to open it and edit it

  but i can actually edit and delete them only if i am registerd and only if the comment is mine :)
  also the comment is posted by my name if i am authenthicated and, when i am not i post a comment from
  "uknown" - name, and "blank" userPFP :)


  and when the comment is clicked i can go and see my profile 
 */

  const { currentUser } = getAuth()

  return (
    <div>
      <div className="d-flex">
        <img
          className="rounded-circle comment-img"
          src={
            currentUser?.photoURL == null
              ? "https://cdn4.vectorstock.com/i/thumb-large/62/38/avatar-13-vector-42526238.jpg"
              : currentUser?.photoURL
          }
        />
        <div className="flex-grow-1 ms-3">
          <div className="mb-1">
            <Link
              to="/dashboard"
              className="fw-bold link-dark pe-1"
              style={{ textDecoration: "none" }}
            >
              {currentUser?.email != null ? currentUser?.displayName : "Unknown"}
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
