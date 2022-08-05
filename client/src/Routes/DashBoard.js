import React, { useState } from "react";
import { Link } from "react-router-dom";
import MoviePoster from "../Components/Blog/MoviePoster";
import UserUpdate from "../Components/UserUpdate/UserUpdate";

const DashBoard = ({ handleSignout }) => {
  //toggle between updating the user or posting the blog
  const [blogPost, setBlogPost] = useState(true);

  return (
    <div className="dashboard">
       <div className="d-flex justify-content-center my-5">
        <button className="dashboard mx-2 btn-1" onClick={() => setBlogPost(prev => !prev)}>Post a blog</button>
        <button className="dasboard mx-2 btn-2" onClick={() => setBlogPost(prev => !prev)}>Update Profile</button>
      </div>
      {blogPost ? <MoviePoster/> : <UserUpdate handleSignout={handleSignout} />}
    </div>
  );
};

export default DashBoard;
